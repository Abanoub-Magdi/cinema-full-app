import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';  // Correct import

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  // Correct property name
})
export class LoginComponent {
  imagePath: string = 'assets/cinema.jpg';
  username = "";
  password = "";
  email = "";
  errormessage = "";

  constructor(private auth: AuthService, private router: Router) { }

  onlogin() {
    if (this.username.trim().length === 0) {
      this.errormessage = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errormessage = "Password is required";
    }
    else {
      this.errormessage = "";

      let result = this.auth.login(this.username, this.password);
      if (result === 200) {
        this.router.navigate(['home']);
      } else if (result === 403) {
        this.errormessage = "Invalid";
      }
    }
  }
}

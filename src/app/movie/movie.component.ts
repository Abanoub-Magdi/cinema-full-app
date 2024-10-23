import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  name = '';
  rating = '';

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private http: HttpClient) { }

  open(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    if (this.type === 'trending') {
      this.url = 'assets/data/trending-movies.json'
    } else if (this.type === 'theatre') {
      this.url = 'assets/data/theatre-movies.json'
    } else {
      this.url = 'assets/data/popular-movies.json'
    }
    this.getMovie();
  }


  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(movie => movie.id == this.id)

      if (index > -1) {
        this.movie = this.movies[index];
      }

    });

  }
}




///////////////////////////////////////


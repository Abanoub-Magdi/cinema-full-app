import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isRatingFinal: boolean[] = []; // Array to track finalization for each movie
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopulareMovies();
  }

  getTrendingMovies() {
    this.http.get('assets/data/trending-movies.json').subscribe((movies: any) => {
      this.trendingMovies = movies;
      this.isRatingFinal = new Array(this.trendingMovies.length).fill(false); // Initialize with false for each movie
      console.log(this.trendingMovies);
    });
  }


  getTheatreMovies() {
    this.http.get('assets/data/theatre-movies.json').subscribe((movies: any) => {
      this.theatreMovies = movies;
      this.isRatingFinal = new Array(this.theatreMovies.length).fill(false); // Initialize with false for each movie
      console.log(this.theatreMovies);
    });
  }


  getPopulareMovies() {
    this.http.get('assets/data/popular-movies.json').subscribe((movies: any) => {
      this.popularMovies = movies;
      this.isRatingFinal = new Array(this.popularMovies.length).fill(false); // Initialize with false for each movie
      console.log(this.popularMovies);
    });
  }



  finalizeRating(index: number) {

    this.isRatingFinal[index] = true;  // Make the rating read-only for the specific movie
  }


  gotomovie(type: string, id: number) {
    this.router.navigate(['movie', type, id]);
  }
}

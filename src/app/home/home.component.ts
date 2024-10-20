import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isRatingFinal: boolean[] = []; // Array to track finalization for each movie
  trendingMovies: any;
  theatreMovies: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
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
      this.trendingMovies = movies;
      this.isRatingFinal = new Array(this.trendingMovies.length).fill(false); // Initialize with false for each movie
      console.log(this.trendingMovies);
    });
  }


  finalizeRating(index: number) {
    this.isRatingFinal[index] = true;  // Make the rating read-only for the specific movie
  }
}

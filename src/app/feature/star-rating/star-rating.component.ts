import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0; // Input for the current rating value
  @Input() maxRating: number = 5; // Maximum number of stars (default is 5)
  @Input() isReadOnly: boolean = true; // Whether the stars are clickable or read-only
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>(); // Emits rating when changed

  stars: boolean[] = [];

  ngOnInit(): void {
    this.updateStars();
  }

  updateStars(): void {
    this.stars = Array(this.maxRating).fill(false).map((_, i) => i < this.rating);
  }

  // When a star is clicked, update the rating (only if not read-only)
  onStarClick(index: number): void {
    if (!this.isReadOnly) {
      this.rating = index + 1;
      this.updateStars();
      this.ratingChange.emit(this.rating); // Emit the new rating
    }
  }
  handleRatingChange(newRating: number) {
    console.log('New Rating:', newRating);
    // You can also save this rating in your movie object or send it to the backend
  }
}
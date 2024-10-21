import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';



@NgModule({
  declarations: [
    StarRatingComponent // Declare the component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarRatingComponent // Export it so it can be used in other modules
  ]
})
export class SharedModule { }
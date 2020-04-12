import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { RootModule } from '../root/root.module';



@NgModule({
  declarations: [TestimonialsComponent],
  imports: [
    CommonModule,
    RootModule
  ]
})
export class TestimonialModule { }

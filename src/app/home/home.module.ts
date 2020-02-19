import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConcertRoutingModule } from '../concert/concert-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ConcertRoutingModule
  ],
  exports: [HomeComponent,
  ]
})
export class HomeModule { }

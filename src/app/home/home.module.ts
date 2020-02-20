import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConcertRoutingModule } from '../concert/concert-routing.module';
import { RootModule } from '../root/root.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ConcertRoutingModule,
    RootModule
  ],
  exports: [HomeComponent,
  ]
})
export class HomeModule { }

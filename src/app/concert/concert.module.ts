import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ConcertRoutingModule } from './concert-routing.module';
import { ConcertService } from './concert.service';
import { RootModule } from '../root/root.module';



@NgModule({
  declarations: [ListComponent, DetailsComponent,],
  imports: [
    CommonModule,
    ConcertRoutingModule,
    RootModule
  ],
  
})
export class ConcertModule { }

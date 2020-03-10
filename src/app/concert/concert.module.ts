import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ConcertRoutingModule } from './concert-routing.module';
import { RootModule } from '../root/root.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [ListComponent, DetailsComponent,],
  imports: [
    CommonModule,
    ConcertRoutingModule,
    RootModule, 
    AuthModule
  ],
  
})
export class ConcertModule { }

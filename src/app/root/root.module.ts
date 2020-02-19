import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './navi/navi.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NaviComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NaviComponent,
  FooterComponent]
})
export class RootModule { }

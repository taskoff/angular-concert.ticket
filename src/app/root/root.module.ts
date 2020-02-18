import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './navi/navi.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NaviComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NaviComponent,
  FooterComponent]
})
export class RootModule { }

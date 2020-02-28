import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './navi/navi.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [NaviComponent, FooterComponent, ErrorPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NaviComponent,
  FooterComponent,
  ErrorPageComponent]
})
export class RootModule { }

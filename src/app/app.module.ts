import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootModule } from './root/root.module';
import { HomeModule } from './home/home.module';
import { FormModule } from './form/form.module';
import { ConcertModule } from './concert/concert.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    RootModule,
    HomeModule,
    FormModule,
    ConcertModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

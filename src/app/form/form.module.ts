import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormRoutingModule } from './form-routing.module';
import { RootModule } from '../root/root.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    RootModule
  ]
})
export class FormModule { }

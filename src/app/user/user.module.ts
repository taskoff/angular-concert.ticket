import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootModule } from '../root/root.module';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RootModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserModule { }

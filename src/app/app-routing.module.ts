import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ErrorPageComponent } from './root/error-page/error-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserProfileComponent
  },
  {
    path:'**',
    component: ErrorPageComponent
  }

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule = RouterModule.forRoot(routes)
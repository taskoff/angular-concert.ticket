import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ErrorPageComponent } from './root/error-page/error-page.component';
import { TestimonialsComponent } from './testimonial/testimonials/testimonials.component';
import { AuthGuardGuard } from './auth-guard/auth-guard.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserProfileComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'comments',
    canActivate:[AuthGuardGuard],
    component: TestimonialsComponent
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
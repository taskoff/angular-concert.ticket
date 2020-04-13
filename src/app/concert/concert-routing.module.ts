import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
// import { AuthGuardGuard } from '../auth-guard/auth-guard.guard';


const routes: Routes = [
    {
        path: 'concert',
        // canActivate:[AuthGuardGuard],
        children: [{
            path: '',
            pathMatch: 'full',
            redirectTo: '/concert/list'
        },
        {
            path: 'list',
            component: ListComponent
        },
        {
            path: 'details',
            component: DetailsComponent
        }]
    },
    
  
  
    ];


    
      export const ConcertRoutingModule = RouterModule.forChild(routes);
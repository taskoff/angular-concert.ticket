import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [
    {
        path: 'concert',
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
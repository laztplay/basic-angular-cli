import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component'
import { AboutComponent } from './about/about.component'
import { NewComponent } from './new/new.component'

const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent }, 
  { path: 'new', component: NewComponent }, 
  { path: ':id', component: NewComponent }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
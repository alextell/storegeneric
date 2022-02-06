import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';


const APP_ROUTES: Routes = [
  { path: 'Principal', component: PrincipalComponent },
 { path: '**',pathMatch: 'full', redirectTo: '/Principal'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes = [
  { path: 'registrar', component: RegistrarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

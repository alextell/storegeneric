import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';



// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios
import { HttpserviceService } from './Services/httpservice.service';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

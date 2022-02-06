import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';
import {HttpserviceService} from '../Services/httpservice.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;
  constructor(private _httpservice:HttpserviceService,
              
              private router: Router) { 
   

  }

  ngOnInit(): void {
  }

  
  login( form: NgForm ) {

    if (  form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();


    this._httpservice.login( this.usuario )
      .subscribe( resp => {

        console.log(resp);
        Swal.close();

        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }


        this.router.navigateByUrl('/home');

      }, (err) => {

        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message
        });
      });

  }
  




}
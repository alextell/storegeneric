import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {



 // private frase: Frase = { value: "", icon_url: "", id: "", url: "" };
  private url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"; // URL to web api
private apikey='AIzaSyBy_EraOpFnUW0AkBliXR3hoQ4__Aj2i9A';

 userToken: string;

constructor(private http: HttpClient) {
  this.leerToken();
}

leerToken() {

  if ( localStorage.getItem('token') ) {
    this.userToken = localStorage.getItem('token');
  } else {
    this.userToken = '';
  }

  return this.userToken;

}


estaAutenticado(): boolean {

  if ( this.userToken.length < 2 ) {
    return false;
  }

  const expira = Number(localStorage.getItem('expira'));
  const expiraDate = new Date();
  expiraDate.setTime(expira);

  if ( expiraDate > new Date() ) {
    return true;
  } else {
    return false;
  }


}

nuevoUsuario( usuario: UsuarioModel ) {

  const authData = {
    ...usuario,
    returnSecureToken: true
  };

  return this.http.post(
    `${ this.url }/signupNewUser?key=${ this.apikey }`,
    authData
  ).pipe(
    map( resp => {
      this.guardarToken( resp['idToken'] );
      return resp;
    })
  );

}


private guardarToken( idToken: string ) {

  this.userToken = idToken;
  localStorage.setItem('token', idToken);

  let hoy = new Date();
  hoy.setSeconds( 3600 );

  localStorage.setItem('expira', hoy.getTime().toString() );


}

  login( usuario: UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/verifyPassword?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );

  }

  
  logout() {
    localStorage.removeItem('token');
  }


}

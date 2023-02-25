import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isOk =false;

  constructor(private xauth:AngularFireAuth) {

    this.xauth.authState.subscribe(user=>{
      if(user){
        this.isOk=true;
      }else{
        this.isOk=false;
      }

    })
   }
 
  Registro(email: string,pass: string){
    return this.xauth.createUserWithEmailAndPassword(email,pass).then((user)=>{
      this.MandarCorreoVerificacion();
      this.CerrarSession();
    }).catch(()=>{
      alert('error en registro');
    });
  }

  MandarCorreoVerificacion(){
    
    //this.xauth.currentUser.sendEmailVerification
    this.xauth.currentUser.then((user) => {
      if (user) {
        user.sendEmailVerification().then(() => {
          // Email de verificación enviado exitosamente
        }).catch((error) => {
          // Ocurrió un error al enviar el correo electrónico de verificación
        });
      } else {
        // No hay ningún usuario autenticado actualmente
      }
    });

  }

  IniciarConEmailPass(email: string,  pass: string){
    return this.xauth.signInWithEmailAndPassword(email,pass).then( (user)=>{
      if (user.user?.emailVerified === false) {
        alert(' Por favor verificar correo');
        this.CerrarSession();
      } 
      alert('estas dentro de la app');
    })
    .catch(()=>{
      alert('error');
    }); 
  }

  CerrarSession(){
    return this.xauth.signOut().then(()=>{
      alert('Has salido de la app');
      
    })
  }

  
  GoogleAuth(){
    return this.AutenticarProveedor(new firebase.auth.GoogleAuthProvider());
  }

  GitHubAuth(){
    //return this.AutenticarProveedor(new firebase.auth.GithubAuthProvider());
    //https://storeonline-f4ab4.firebaseapp.com/__/auth/handler
    this.xauth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((result) => {
        // El inicio de sesión con GitHub fue exitoso
        alert('El inicio de sesión con GitHub fue exitoso');
      })
      .catch((error) => {
        // Ocurrió un error durante el inicio de sesión con GitHub
      });
  }

  GitHubAuth2(){
    return this.AutenticarProveedor(new firebase.auth.GithubAuthProvider())
      .then((result) => {
        // El inicio de sesión con GitHub fue exitoso
        alert('El inicio de sesión con GitHub fue exitoso');
      })
      .catch((error) => {
        // Ocurrió un error durante el inicio de sesión con GitHub
        alert('Ocurrió un error durante el inicio de sesión con GitHub: ' + error.message);
      });
  }

  FaceBookAuth(){
    return this.AutenticarProveedor(new firebase.auth.FacebookAuthProvider());
  }
  
  AutenticarProveedor(proveedor: firebase.auth.AuthProvider){
    return this.xauth.signInWithPopup(proveedor).then(()=>{
        alert('Estas en la app')
    });
  }

  

}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Auth, getAuth, GoogleAuthProvider} from 'firebase/auth';


import { AngularFireAuth } from '@angular/fire/compat/auth';
//import {user } from  'firebase';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,public afAuth:AngularFireAuth) { }

  async loginGoogle(){
    try{
      return this.afAuth.signInWithPopup(new GoogleAuthProvider());
      }
    catch(error){console.log(error)}
    return false;
    }

  API="http://127.0.0.1:8000/api/auth";

  loginEmail(email:string, pass:string){
    return this.http.post(this.API+"/login",{ email:email,password:pass });
  }

  logout() :void {
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }




}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  API="http://127.0.0.1:8000/api/auth";

  loginEmail(email:string, pass:string){
    return this.http.post(this.API+"/login",{ email:email,password:pass });
  }

  logout() :void {
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }
}

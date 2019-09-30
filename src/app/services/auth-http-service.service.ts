import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const baseUrl = "";

@Injectable({
  providedIn: 'root'
})
export class AuthHTTPServiceService {

  constructor(private http : Http) { }

  login(email, password){
    return this.http.get('http://localhost:3000/').toPromise();
  }

  register(){

  }

  getUserDetails(){}

  updateUserDetails(){}
}

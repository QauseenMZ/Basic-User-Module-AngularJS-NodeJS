import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const baseUrl = "";

@Injectable({
  providedIn: 'root'
})
export class AuthHTTPServiceService {

  constructor(private http : Http) { }

  login(email, password){
    // this.http.post()
  }

  register(){

  }

  getUserDetails(){}

  updateUserDetails(){}
}

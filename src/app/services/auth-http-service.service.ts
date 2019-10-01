import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const baseUrl = "http://localhost:7000";

@Injectable({
  providedIn: 'root'
})
export class AuthHTTPServiceService {

  constructor(private http : Http) {}

  login(email, password){
    return this.http.post(baseUrl + '/user/authenticate', { email: email, password: password })
  }

  register(userObj){
    return this.http.post(baseUrl + '/user/register', { userObj: JSON.stringify(userObj) })
  }
}

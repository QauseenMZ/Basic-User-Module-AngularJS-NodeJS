import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const baseUrl = "http://localhost:7000";

@Injectable({
  providedIn: 'root'
})
export class AuthHTTPServiceService {

  constructor(private http : Http) {
    
   }

  login(email, password){
    console.log('email:', email)
    console.log('password:', password)

    return this.http.post(baseUrl + '/user/authenticate', { email: email, password: password })
    // .toPromise()
    // .then((success) => {
    //   return success.json()
    //   // console.log('response: ', success)
    //   // let response = this.dbService.verifyLoginInfo(this.email, this.password)
    //   // console.log('db response: ', response)
      
    // }, 
    // (error) => {
    //   console.log('Error: ', error)
    //   alert(error)
    // })
    
    // .catch((e) => {
    //   console.log('Error: ', e);
    //   alert('Some error occurred. Please check logs.')
    // });
  }

  register(userObj){
    return this.http.post(baseUrl + '/user/register', { userObj: JSON.stringify(userObj) })
  }

  getUserDetails(){}

  updateUserDetails(){}
}

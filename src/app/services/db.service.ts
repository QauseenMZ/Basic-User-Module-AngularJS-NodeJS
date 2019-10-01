import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private allUsers: any = [];

  constructor() {
    if(localStorage.getItem('allUsers')){
      this.allUsers = JSON.parse(localStorage.getItem('allUsers'));
    }
    else {
      localStorage.setItem('allUsers', JSON.stringify([]))
    }
  }

  verifyLoginInfo(email, password){
    this.allUsers.forEach((userObj) => {
      if(userObj.emailId == email){
        if(userObj.password == password){
          localStorage.setItem('currentUser', JSON.stringify({email : email}));            
          return true;
        }
        else{
          return false;
        }
      }
    })
    return false;
  }

  registerUser(userObj){
    return new Promise((resolve, reject) => {
      let exists = false;
      this.allUsers.forEach((data) => {
        if(data.emailId == userObj.emailId){
          exists = true
          resolve(false);
        }
      })

      if(!exists){
        this.allUsers.push(userObj);
        localStorage.setItem('allUsers', JSON.stringify(this.allUsers))
        localStorage.setItem('currentUser', JSON.stringify({email : userObj.emailId}));  
        resolve(true)
      }
    })
  }

  isAuthenticated(){
    let currentUser = localStorage.getItem('currentUser');
    if(currentUser){
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}

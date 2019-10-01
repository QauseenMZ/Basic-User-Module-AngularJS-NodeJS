import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {AuthHTTPServiceService} from '../../services/auth-http-service.service'
import {DbService} from '../../services/db.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(6)]);

  constructor(private authService: AuthHTTPServiceService,
        private dbService : DbService,
        private route: ActivatedRoute,
        private router: Router) {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Please enter valid email' : '';
  }

  login(){
    if(this.isValidFormValue()){
      this.authService.login(this.email.value, this.password.value).toPromise().then((success) => {
        let valid = this.dbService.verifyLoginInfo(this.email, this.password)
        if(valid){
          this.router.navigate(['dashboard']);
        }
        else {
          alert('User or Password incorrect. New User? Please register')
        }
        this.email.setValue('');
        this.password.setValue('')
      }, 
      (error) => {
        console.log('Error: ', error)
        alert(error)
      })
    }
    else{
      alert('All fields must be filled correctly')
    }
  }

  isValidFormValue(){
    if(this.email.hasError('required') || this.email.hasError('email') || !this.password.value){
      return false;
    }
  }

  ngOnInit() { 
  }

}

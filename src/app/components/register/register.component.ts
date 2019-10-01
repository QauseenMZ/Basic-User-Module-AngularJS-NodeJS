import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {AuthHTTPServiceService} from '../../services/auth-http-service.service'
import {DbService} from '../../services/db.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(6)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.min(6)]);
  phoneNo = new FormControl('', [Validators.required, Validators.min(8), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);

  constructor(private authService: AuthHTTPServiceService,
        private dbService : DbService,
        private route: ActivatedRoute,
        private router: Router) {
  }

  register(){
    if(this.password.value !== this.confirmPassword.value){
      alert("Passwords do not match. Please re-enter");
      return;
    }

    if(!this.isValidFormValue()){
      alert('All fields must be filled with appropriate values');
      return;
    }

    let userObj = new User(this.email.value, 
                            this.password.value, 
                            this.firstName.value,
                            this.lastName.value, 
                            this.phoneNo.value)
    this.authService.register(userObj).toPromise().then((success) => {
      this.dbService.registerUser(userObj).then((success) =>{
        if(success){
          this.router.navigate(['dashboard']);
        }
        else{
          alert('User already exists')
        }
      })
    }, (error) => {
      console.log('Error: ', error)
      alert(error)
    })
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Please enter valid email' : '';
  }

  isValidFormValue(){
    if(this.email.hasError('required') || this.email.hasError('email') || !this.password.value
      || !this.firstName.value || !this.lastName.valid || !this.phoneNo || this.phoneNo.hasError('pattern')){
      return false;
    }
  }

  ngOnInit() {}

}

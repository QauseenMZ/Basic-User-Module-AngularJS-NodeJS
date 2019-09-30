import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = {
    invalid : true
  };
  value='';
  value1 = '';
  value2 = '';

  constructor() { }

  getErrorMessage(){
    return 'invalid email';
  }

  ngOnInit() {
  }

}

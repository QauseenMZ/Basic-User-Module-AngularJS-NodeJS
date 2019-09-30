import { Component } from '@angular/core';
import {AuthHTTPServiceService} from './services/auth-http-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-module';

  constructor(private authService: AuthHTTPServiceService){
    this.authService.login('', '').then(response => {
      console.log('response: ', response)
    }).catch((e) => {
      console.log('Error: ', e)
    })
  }
}

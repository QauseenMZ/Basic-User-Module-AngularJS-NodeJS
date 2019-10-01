import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {DbService} from '../../services/db.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  firstName = new FormControl({disabled: true, value : '' }, [Validators.required]);
  lastName = new FormControl({disabled: true, value: ''}, [Validators.required]);
  email = new FormControl({disabled: true, value: ''}, [Validators.required, Validators.email]);
  password = new FormControl({disabled: true, value : ''}, [Validators.required, Validators.min(6)]);
  confirmPassword = new FormControl({disabled: true, value: ''}, [Validators.required, Validators.min(6)]);
  phoneNo = new FormControl({disabled: true, value : ''}, [Validators.required, Validators.min(8)]);

  constructor(private dbService : DbService,
        private route: ActivatedRoute,
        private router: Router) {
  }

  logout(){
    this.dbService.logout();
    this.router.navigate(['/'])
  }
  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DbService } from './services/db.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private dbService: DbService 
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let validUser = this.dbService.isAuthenticated();
        if(validUser){
            return true;
        }
        this.router.navigate(['/']);
    }
}
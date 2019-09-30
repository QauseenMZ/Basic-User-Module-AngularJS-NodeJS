import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AuthGuard } from './auth-guard';

const route: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: UserDetailsComponent,  canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(route) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
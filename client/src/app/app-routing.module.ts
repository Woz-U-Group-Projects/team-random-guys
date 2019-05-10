import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { SignupPageComponent } from './shared/components/signup-page/signup-page.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { ProfileComponent } from './modules/dashboard/components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full'},
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
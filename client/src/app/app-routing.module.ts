import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { SignupPageComponent } from './shared/components/signup-page/signup-page.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { ProfileComponent } from './modules/dashboard/components/profile/profile.component';
import { EventDetailComponent } from './modules/dashboard/components/event-detail/event-detail.component';
import { EventPageComponent } from './modules/dashboard/components/event-page/event-page.component'


const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full'},
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'eventdetail', component: EventDetailComponent }
];

@NgModule({
  declarations: [
    EventPageComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
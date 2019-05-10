import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from "./components/profile/profile.component";
@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent, NavbarComponent
  ]
})
export class DashboardModule { }

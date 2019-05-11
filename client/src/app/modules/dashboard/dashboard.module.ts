import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { EventDetailComponent } from './components/event-detail/event-detail.component';
@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ProfileComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardComponent, NavbarComponent
  ]
})
export class DashboardModule { }

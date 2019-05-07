import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
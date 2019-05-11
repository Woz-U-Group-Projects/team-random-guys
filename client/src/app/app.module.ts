import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http'

import { TimeSelectionModule } from './modules/time-selection/time-selection.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { SignupPageComponent } from './shared/components/signup-page/signup-page.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
//import { EventPageComponent } from './components/event-page/event-page.component';

import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimeSelectionModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [AccountService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages"

import { AuthService } from '../../../services/auth.service';;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userName: String;
  password: String;

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      userName: this.userName,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now log in.', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['login']);
      };
    });
  }

}

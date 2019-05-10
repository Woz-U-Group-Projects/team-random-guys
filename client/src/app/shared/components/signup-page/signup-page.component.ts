import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from "../../../services/account.service";
import { FlashMessagesService } from "angular2-flash-messages"
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;

  constructor(
    private accountService: AccountService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {}

  onSignUpSubmit(){
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      email: this.email,
      password: this.password
    }

    // Required Fields
    if(!this.accountService.validateSignUp(user)) {
      console.log("Fill All.")
      this.flashMessage.show("Please fill in all fields.", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.accountService.validateEmail(user.email)) {
      console.log("Invalid Email")
      this.flashMessage.show("Please use a valid email.", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show("You are now registered.", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show("Something went wrong.", {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/signup']);
      }
    });
  }

}

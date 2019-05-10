import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages"

import { AuthService } from '../../../../services/auth.service';;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuOpen = false;

  toggleMenu() {
    console.log('toggle');
    this.menuOpen = !this.menuOpen;
  }

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out', {cssClass: 'alert-sucess', timeout: 3000});
    this.router.navigate(['/login']);
    return false
  }
}

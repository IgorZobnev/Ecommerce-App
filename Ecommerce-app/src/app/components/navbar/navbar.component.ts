import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser: boolean = false;

  isOpen: boolean = false;

  constructor(private as : AuthService) { }

  toggleNavBar() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    this.as.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.as.userID = user.uid;
      }
      else {
        this.isUser = false;
        this.as.userID = "";
      }
    })
  }

  logout() {
    this.as.logout();
  }

}

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false;

  constructor(private as : AuthService) { }

  toggleNavBar() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

  logout() {
    this.as.logout();
  }

}

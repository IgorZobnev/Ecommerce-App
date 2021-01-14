import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.default.User>;
  userID: string = "";

  constructor(private fire: AngularFireAuth) {
    this.user = fire.user;
  }

  signup(email: string, password: string) {
    return this.fire.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.fire.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fire.signOut();
  }
}

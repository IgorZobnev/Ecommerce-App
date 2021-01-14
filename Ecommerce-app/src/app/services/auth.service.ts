import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fire: AngularFireAuth) { }

  signup(email: string, password: string) {
    return this.fire.createUserWithEmailAndPassword(email, password);
  }
}

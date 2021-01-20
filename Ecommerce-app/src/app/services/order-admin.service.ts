import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderAdminService {
  users: Observable<any>;
  usersID: Array<string> = [];

  constructor(private fs: AngularFirestore) {
    this.users = this.fs.collection(`User`).get();
    console.log(this.users);
  }

  
}

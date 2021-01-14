import { AuthService } from './auth.service';
import { Product } from 'src/app/interface/products.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private as: AuthService) { }

  addToCart(Product) {
    return this.fs.collection(`User/${this.as.userID}/cart`).add(Product);
  }
}

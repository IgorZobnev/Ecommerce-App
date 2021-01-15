import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart: Array<any>;
  cartPrice: number = 0;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getCart().subscribe(cs => {
      this.shoppingCart = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      });
      this.recalculate();
    });
  }

  deleteCart(i: number) {
    return this.cart.deleteCart(this.shoppingCart[i].id);
  }

  updateCart(i: number) {
    return this.cart.updateCart(this.shoppingCart[i].id, this.shoppingCart[i].amount);
  }

  private recalculate() {
    this.cartPrice = 0;
    this.shoppingCart.forEach(l => {
      this.cartPrice += l.amount * l.price;
    });
  }
}

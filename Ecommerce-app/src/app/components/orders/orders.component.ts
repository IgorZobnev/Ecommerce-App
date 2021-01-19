import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  orderList: Array<any>;

  constructor(private order: OrderService) { }

  ngOnInit(): void {
    this.order.getOrder().subscribe(cs => {
      this.orderList = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      });
    });
  }

  deleteOrder(i: number) {
    return this.order.deleteOrder(this.orderList[i].id);
  }

  updateOrder(i: number) {
    return this.order.updateOrder(this.orderList[i].id, this.orderList[i].isSend);
  }
}

import { OrderAdminService } from './../../services/order-admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit {

  userList: Array<any>;

  constructor(private oas: OrderAdminService) { }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrderStatus } from '../../models/board-item.models';

@Component({
  selector: 'ivato-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) { }

  public order: Order;

  public ngOnInit(): void {
    this.order = {
      id: '43465476566',
      title: 'Mock title',
      status: OrderStatus.inProgress
    }
    // this.route.params.subscribe((params)=> {
    //   if(params['orderId']){

    //   }
    // })
  }
}
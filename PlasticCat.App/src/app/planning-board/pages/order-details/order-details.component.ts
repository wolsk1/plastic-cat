import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrderStatus } from '../../models/board-item.models';

@Component({
  selector: 'pc-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) { }

  public order: Order;

  public ngOnInit(): void {
  }
}
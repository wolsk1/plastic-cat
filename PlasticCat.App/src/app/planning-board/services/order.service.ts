import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from "../models/board-item.models";

@Injectable()
export class OrderService {
  constructor(
    private http: HttpClient
  ){}

  public getOrders(): Observable<Order> {
    return this.http.get<Order>('/api/v1/orders/get');
  }
}
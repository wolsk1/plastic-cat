import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Order } from "../models/board-item.models";
import { HttpService } from "src/app/core/services/http.service";
import { ICatResponse } from "src/app/core/models/cat-response.model";

@Injectable()
export class OrderService extends HttpService {
  constructor(
    http: HttpClient
  ){
    super(http, 'orders');
  }

  public getOrders(): Observable<Order[]> {
    return this.get<Order[]>();
  }

  public create(payload: Order): Observable<ICatResponse> {
    return this.post<Order, ICatResponse>('create', payload);
  }
}
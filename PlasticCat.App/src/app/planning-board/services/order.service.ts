import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

import { Order } from "../models/board-item.models";
import { HttpService } from "src/app/core/services/http.service";
import { SettingsService } from "src/app/core/services";

@Injectable()
export class OrderService extends HttpService {
  constructor(
    http: HttpClient,
    settingsService: SettingsService
  ){
    super(http, settingsService, 'orders');
  }

  public getOrders(): Observable<Order[]> {
    return this.get<Order[]>('get');
  }
}
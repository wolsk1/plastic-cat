import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from "../models/board-item.models";
import { HttpService } from "src/app/shared/services/http.service";
import { SettingsService } from "src/app/shared/services";

@Injectable()
export class OrderService extends HttpService {
  constructor(
    http: HttpClient,
    settingsService: SettingsService
  ){
    super(http, settingsService, 'orders');
  }

  public getOrders(): Observable<Order[]> {
    return this.wrappedGet<Order[]>('get');
  }
}
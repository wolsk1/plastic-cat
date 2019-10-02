import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

import { Client } from "../models/client.models";
import { HttpService } from "src/app/core/services/http.service";
import { SettingsService } from "src/app/core/services";
import { ICatResponse } from "src/app/core/models/cat-response.model";

@Injectable({
  providedIn: `root`
})
export class ClientService extends HttpService {
  constructor(
    http: HttpClient
  ){
    super(http, 'clients');
  }

  public getAll(): Observable<Client[]> {
    return this.http.get<Client[]>('api/clients');
  }

  public create(client: Client): Observable<ICatResponse> {
    return this.post<Client, ICatResponse>('create', client);
  }
}
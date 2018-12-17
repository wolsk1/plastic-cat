import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

import { Client } from "../models/client.models";
import { HttpService } from "src/app/core/services/http.service";
import { SettingsService } from "src/app/core/services";

@Injectable()
export class ClientService extends HttpService {
  constructor(
    http: HttpClient,
    settingsService: SettingsService
  ){
    super(http, settingsService, 'clients');
  }

  public getAll(): Observable<Client[]> {
    return this.get<Client[]>('get');
  }

  public create(client: Client): Observable<Response> {
    return this.post<Client, Response>('create', client);
  }
}
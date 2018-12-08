import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpService } from "src/app/shared/services/http.service";
import { SettingsService } from "src/app/shared/services";
import { Client } from "../models/client.models";

@Injectable()
export class ClientService extends HttpService {
  constructor(
    http: HttpClient,
    settingsService: SettingsService
  ){
    super(http, settingsService, 'clients');
  }

  public getAll(): Observable<Client[]> {
    return this.wrappedGet<Client[]>('get');
  }

  public create(client: Client): Observable<Response> {
    return this.post<Client, Response>('create', client);
  }
}
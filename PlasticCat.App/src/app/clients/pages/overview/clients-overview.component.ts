import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Observable } from 'rxjs';
import { Client } from '../../models/client.models';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'pc-clients-overview',
  templateUrl: './clients-overview.component.html',
  // styleUrls: [ './clients-overview.component.css' ]
})
export class ClientsOverviewComponent implements OnInit {
  public clients: Observable<Client[]>

  constructor(
    private clientService: ClientService
  ) { }

  public ngOnInit(): void {
    this.clients = this.clientService.getAll()
      // .pipe(
      //   map(clients => clients.map(client => {
      //     client.fullName = client.surname
      //     ? `${client.name} ${client.surname}`
      //     : client.name
      //     return client;
      //   }))
      // );
  }
}

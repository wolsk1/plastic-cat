import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Observable, of } from 'rxjs';
import { Client } from '../../models/client.models';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'pc-clients-overview',
  templateUrl: './clients-overview.component.html',
  styleUrls: ['./clients-overview.component.scss']
})
export class ClientsOverviewComponent implements OnInit {
  public clients: Observable<Client[]>;
  public displayedColumns: string[] = ['id', 'clientName'];

  constructor(
    private clientService: ClientService
  ) { }

  public ngOnInit(): void {
    this.clients = of([
      {
        userId: '0001',
        name: 'SIA Gurķis',
        registrationNumber: '',
        phone: '',
        email: ''
      }
    ]);
    // this.clients = this.clientService.getAll()
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

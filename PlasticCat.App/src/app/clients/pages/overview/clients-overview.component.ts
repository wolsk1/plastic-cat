import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Subscription, Observable } from 'rxjs';
import { Client } from '../../models/client.models';

@Component({
  selector: 'pc-clients-overview',
  templateUrl: './clients-overview.component.html',
  // styleUrls: [ './clients-overview.component.css' ]
})
export class ClientsOverviewComponent implements OnInit {
  public clients: Observable<Client[]>

  private readonly subs = new Subscription();

  constructor(
    private clientService: ClientService
  ){}

  public ngOnInit(): void {
    this.clients = this.clientService.getAll();
  }
}

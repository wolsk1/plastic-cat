import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Observable, of } from 'rxjs';
import { Client } from '../../models/client.models';
import { tap, map, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ClientCreateComponent } from '../create/client-create.component';

@Component({
  selector: 'pc-clients-overview',
  templateUrl: './clients-overview.component.html',
  styleUrls: ['./clients-overview.component.scss']
})
export class ClientsOverviewComponent implements OnInit {
  public clients: Observable<Client[]>;
  public displayedColumns: string[] = [
    'id',
    'registrationNumber', 
    'clientName',
    'phone',
    'email'
  ];

  constructor(
    private clientService: ClientService,
    private matDialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.loadClients();
  }

  public openCreateForm(): void {
    this.matDialog
      .open(ClientCreateComponent)
      .afterClosed().pipe(take(1))
      .subscribe(() => this.loadClients());
  }

  private loadClients(): void {
    this.clients = this.clientService.getAll();
  }
}

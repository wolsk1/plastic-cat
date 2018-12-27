import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Client } from 'src/app/clients/models/client.models';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientNamePipe } from 'src/app/clients/pipes';

@Component({
  selector: 'pc-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  public myControl: FormControl;
  public clients: Client[];
  public filteredClients: Observable<Client[]>;

  constructor(
    private clientNamePipe: ClientNamePipe
  ) { }

  public ngOnInit(): void {
    this.myControl = new FormControl();
    this.clients = [
      {
        id: '00000001',
        name: 'Janeks',
        surname: 'Caurumins'
      },
      {
        id: '00000002',
        name: 'Dainis',
        surname: 'Zabaks'
      }
    ];

    this.filteredClients = this.myControl.valueChanges
      .pipe(map(value => this.filterClients(value)));

    this.filteredClients = this.myControl.valueChanges
      .pipe(
        startWith<string | Client>(''),
        map(value => typeof value === 'string' ? value : this.clientNamePipe.transform(value)),
        map(name => name ? this.filterClients(name) : this.clients.slice())
      );
  }

  public displayFn(client?: Client): string | undefined {
    return client ? `${client.id} - ${this.clientNamePipe.transform(client)}` : undefined;
  }

  // TODO move out filter logic to own component
  private filterClients(value: string): Client[] {
    const filterValue = value.toLowerCase();
    return this.clients.filter(client =>
      this.clientNamePipe.transform(client)
        .toLowerCase()
        .includes(filterValue));
  }
}
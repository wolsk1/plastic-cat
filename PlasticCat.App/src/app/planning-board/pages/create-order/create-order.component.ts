import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Client } from 'src/app/clients/models/client.models';
import { Observable, of } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

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
  ) { }

  public ngOnInit(): void {
    this.myControl = new FormControl();
    this.clients = [
      {
        id: '00000001',
        fullName: 'Janeks Caurumins'
      },
      {
        id: '00000002',
        fullName: 'Dainis Zabaks'
      }
    ];

    this.filteredClients = this.myControl.valueChanges
      .pipe(
        tap(value => console.log(value)),
        // startWith(''),
        map(value => this.filterClients(value))
      );

    this.filteredClients = this.myControl.valueChanges
      .pipe(
        startWith<string | Client>(''),
        map(value => typeof value === 'string' ? value : value.fullName),
        map(name => name ? this.filterClients(name) : this.clients.slice())
      );
  }

  public displayFn(client?: Client): string | undefined {
    return client ? `${client.id} - ${client.fullName}` : undefined;
  }

  private filterClients(value: string): Client[] {
    const filterValue = value.toLowerCase();

    return this.clients.filter(client => client.fullName.toLowerCase().includes(filterValue));
  }
}
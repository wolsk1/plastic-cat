import { Component } from '@angular/core';
import { Client } from '../../models/client.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'pc-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: [ './client-create.component.scss' ]
})
export class ClientCreateComponent  {
  public clients: Client[];
  public formGroup: FormGroup;
  public isLegalClient: boolean;

  constructor(
    private builder: FormBuilder,
    private clientService: ClientService
  ) { }

  public ngOnInit(): void {
    this.formGroup = this.builder.group({
      fullName: ['', Validators.required]
    })
  }

  public create(): void {
    if(this.formGroup.valid){
      this.clientService
      .create({name: this.formGroup.get('name').value})
      .subscribe((response) => console.log(response));
    }
  }
}

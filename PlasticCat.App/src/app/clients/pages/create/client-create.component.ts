import { Component } from '@angular/core';
import { Client } from '../../models/client.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pc-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: [ './client-create.component.scss' ]
})
export class ClientCreateComponent  {
  public clients: Client[];
  public formGroup: FormGroup;

  constructor(
    private builder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.formGroup = this.builder.group({
      fullName: ['', Validators.required]
    })
  }
}

import { Component } from '@angular/core';
import { Client } from '../../models/client.models';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'pc-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: [ './client-create.component.scss' ]
})
export class ClientCreateComponent  {
  public clients: Client[];
  public physicalForm: FormGroup;
  public legalForm: FormGroup;
  public isLegalControl: FormControl;
  public isLegal: boolean;

  constructor(
    private builder: FormBuilder,
    private clientService: ClientService
  ) { }

  public ngOnInit(): void {
    this.isLegalControl = new FormControl();
    this.physicalForm = this.builder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.legalForm = this.builder.group({
      name: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  public isFormValid(): boolean {
    if(this.isLegalControl.value){
      return this.legalForm.valid;
    }

    return this.physicalForm.valid;
  }

  public create(): void {
    if(this.isLegalControl.value){
      this.createLegal();
    }
    else{
      this.createPhysical();
    }
  }

  public createLegal(): void {
    if(this.legalForm.valid){
      this.clientService
      .create({
        name: this.physicalForm.get('name').value,
        registrationNumber: this.physicalForm.get('registrationNumber').value,
        phone: this.physicalForm.get('phone').value,
        email: this.physicalForm.get('email').value
      })
      .subscribe((response) => console.log(response));
    }
  }

  public createPhysical(): void {
    if(this.physicalForm.valid){
      this.clientService
      .create({
        name: this.physicalForm.get('name').value,
        surname: this.physicalForm.get('surname').value,
        phone: this.physicalForm.get('phone').value,
        email: this.physicalForm.get('email').value
      })
      .subscribe((response) => console.log(response));
    }
  }
}

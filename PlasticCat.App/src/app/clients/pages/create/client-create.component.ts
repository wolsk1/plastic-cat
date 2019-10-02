import { Component } from '@angular/core';
import { Client } from '../../models/client.models';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { MatDialogRef } from '@angular/material';
import { ICatResponse } from 'src/app/core/models/cat-response.model';

@Component({
  selector: 'pc-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent {
  public clients: Client[];
  public createForm: FormGroup;
  public physicalForm: FormGroup;
  public legalForm: FormGroup;

  public get isFormValid(): boolean {
    return this.isLegalClient
      ? this.legalForm.valid
      : this.physicalForm.valid;
  }

  private get isLegalClient(): boolean {
    const control = this.createForm.get('isLegalClient');
    return control !== undefined ? control.value : false;
  }

  constructor(
    private builder: FormBuilder,
    private clientService: ClientService,
    private dialogRef: MatDialogRef<ClientCreateComponent>
  ) { }

  public ngOnInit(): void {
    this.createForm = this.builder.group({
      isLegalClient: [false]
    });
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

  public create(): void {
    if (this.isLegalClient) {
      this.createLegal();
    }
    else {
      this.createPhysical();
    }
  }

  public createLegal(): void {
    if (this.isFormValid) {
      this.clientService
        .create({
          name: this.legalForm.get('name').value,
          registrationNumber: this.legalForm.get('registrationNumber').value,
          phone: this.legalForm.get('phone').value,
          email: this.legalForm.get('email').value
        })
        .subscribe((response: ICatResponse) => this.createHandle(response));
    }
  }

  public createPhysical(): void {
    if (this.isFormValid) {
      this.clientService
        .create({
          name: this.physicalForm.get('name').value,
          surname: this.physicalForm.get('surname').value,
          phone: this.physicalForm.get('phone').value,
          email: this.physicalForm.get('email').value
        })
        .subscribe((response: ICatResponse) => this.createHandle(response));
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

  private onCreateFailed(): void {
  }

  private createHandle(response: ICatResponse): void {
    response.isSuccess
      ? this.dialogRef.close()
      : console.log(response);
  }
}

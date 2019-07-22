import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
  ],
  providers:[  ],
  exports: [ 
    CommonModule, 
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }

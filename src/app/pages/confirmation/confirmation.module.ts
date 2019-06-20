import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ConfirmationPage } from './confirmation'
import { ConfirmationPageRoutingModule } from './confirmation-routing.module'

import { ResourceTypePipe } from './../../pipes/resourceType.pipe';
import { BoolTypePipe } from './../../pipes/boolType.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPageRoutingModule
  ],
  declarations: [
    ConfirmationPage,
    ResourceTypePipe,
    BoolTypePipe,
  ]
})
export class ConfirmationModule { }

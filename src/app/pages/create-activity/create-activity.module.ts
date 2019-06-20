import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CreateActivityPage } from './create-activity';
import { CreateActivityPageRoutingModule } from './create-activity-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateActivityPageRoutingModule
  ],
  declarations: [
    CreateActivityPage,
  ]
})
export class CreateActivityModule { }

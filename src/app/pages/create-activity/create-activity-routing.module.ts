import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateActivityPage } from './create-activity';

const routes: Routes = [
  {
    path: '',
    component: CreateActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateActivityPageRoutingModule { }

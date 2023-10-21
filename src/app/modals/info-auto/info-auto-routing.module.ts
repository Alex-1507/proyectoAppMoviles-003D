import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAutoPage } from './info-auto.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAutoPageRoutingModule {}

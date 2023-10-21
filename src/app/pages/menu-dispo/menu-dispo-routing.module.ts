import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDispoPage } from './menu-dispo.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDispoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDispoPageRoutingModule {}

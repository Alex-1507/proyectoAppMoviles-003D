import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSoliConfirmacionPage } from './menu-soli-confirmacion.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSoliConfirmacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSoliConfirmacionPageRoutingModule {}

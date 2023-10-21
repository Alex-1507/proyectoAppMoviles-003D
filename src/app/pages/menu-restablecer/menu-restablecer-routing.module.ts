import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuRestablecerPage } from './menu-restablecer.page';

const routes: Routes = [
  {
    path: '',
    component: MenuRestablecerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRestablecerPageRoutingModule {}

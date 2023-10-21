import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRecuperacionPage } from './login-recuperacion.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRecuperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRecuperacionPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRecuperacionCorreoPage } from './login-recuperacion-correo.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRecuperacionCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRecuperacionCorreoPageRoutingModule {}

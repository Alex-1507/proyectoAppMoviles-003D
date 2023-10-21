import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRecuperacionPageRoutingModule } from './login-recuperacion-routing.module';

import { LoginRecuperacionPage } from './login-recuperacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRecuperacionPageRoutingModule
  ],
  declarations: [LoginRecuperacionPage]
})
export class LoginRecuperacionPageModule {}

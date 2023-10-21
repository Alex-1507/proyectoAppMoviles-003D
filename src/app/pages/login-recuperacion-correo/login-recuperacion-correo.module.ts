import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRecuperacionCorreoPageRoutingModule } from './login-recuperacion-correo-routing.module';

import { LoginRecuperacionCorreoPage } from './login-recuperacion-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRecuperacionCorreoPageRoutingModule
  ],
  declarations: [LoginRecuperacionCorreoPage]
})
export class LoginRecuperacionCorreoPageModule {}

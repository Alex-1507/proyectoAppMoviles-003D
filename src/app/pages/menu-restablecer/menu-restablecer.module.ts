import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuRestablecerPageRoutingModule } from './menu-restablecer-routing.module';

import { MenuRestablecerPage } from './menu-restablecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRestablecerPageRoutingModule
  ],
  declarations: [MenuRestablecerPage]
})
export class MenuRestablecerPageModule {}

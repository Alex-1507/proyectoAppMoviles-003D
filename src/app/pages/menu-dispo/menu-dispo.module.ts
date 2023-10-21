import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDispoPageRoutingModule } from './menu-dispo-routing.module';

import { MenuDispoPage } from './menu-dispo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDispoPageRoutingModule
  ],
  declarations: [MenuDispoPage]
})
export class MenuDispoPageModule {}

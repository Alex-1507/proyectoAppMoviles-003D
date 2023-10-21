import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSoliConfirmacionPageRoutingModule } from './menu-soli-confirmacion-routing.module';

import { MenuSoliConfirmacionPage } from './menu-soli-confirmacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSoliConfirmacionPageRoutingModule
  ],
  declarations: [MenuSoliConfirmacionPage]
})
export class MenuSoliConfirmacionPageModule {}

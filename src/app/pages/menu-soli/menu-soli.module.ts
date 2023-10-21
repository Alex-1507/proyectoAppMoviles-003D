import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSoliPageRoutingModule } from './menu-soli-routing.module';

import { MenuSoliPage } from './menu-soli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSoliPageRoutingModule
  ],
  declarations: [MenuSoliPage]
})
export class MenuSoliPageModule {}

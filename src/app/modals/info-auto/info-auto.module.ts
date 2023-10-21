import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAutoPageRoutingModule } from './info-auto-routing.module';

import { InfoAutoPage } from './info-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAutoPageRoutingModule
  ],
  declarations: [InfoAutoPage]
})
export class InfoAutoPageModule {}

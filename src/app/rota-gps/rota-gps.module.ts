import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RotaGPSPageRoutingModule } from './rota-gps-routing.module';

import { RotaGPSPage } from './rota-gps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RotaGPSPageRoutingModule
  ],
  declarations: [RotaGPSPage]
})
export class RotaGPSPageModule {}

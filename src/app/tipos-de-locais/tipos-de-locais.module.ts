import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposDeLocaisPageRoutingModule } from './tipos-de-locais-routing.module';

import { TiposDeLocaisPage } from './tipos-de-locais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposDeLocaisPageRoutingModule
  ],
  declarations: [TiposDeLocaisPage]
})
export class TiposDeLocaisPageModule {}

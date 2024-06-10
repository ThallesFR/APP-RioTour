import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaDeLocaisPageRoutingModule } from './lista-de-locais-routing.module';
import { ListaDeLocaisPage } from './lista-de-locais.page';
import { ComponetsModule } from '../components/Componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeLocaisPageRoutingModule,
    ComponetsModule,
  ],
  declarations: [ListaDeLocaisPage]
})
export class ListaDeLocaisPageModule {}

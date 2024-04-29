import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeLocaisPage } from './lista-de-locais.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeLocaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeLocaisPageRoutingModule {}

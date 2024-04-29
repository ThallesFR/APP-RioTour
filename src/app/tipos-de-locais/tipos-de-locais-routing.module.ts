import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposDeLocaisPage } from './tipos-de-locais.page';

const routes: Routes = [
  {
    path: '',
    component: TiposDeLocaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposDeLocaisPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RotaGPSPage } from './rota-gps.page';

const routes: Routes = [
  {
    path: '',
    component: RotaGPSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotaGPSPageRoutingModule {}

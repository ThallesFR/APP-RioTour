import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MenuNavComponent } from './menu-nav/menu-nav.component';

@NgModule({
  declarations: [MenuNavComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MenuNavComponent]
})
export class ComponetsModule {}

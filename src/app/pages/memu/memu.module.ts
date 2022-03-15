import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemuPageRoutingModule } from './menu-routing.module';

import { MemuPage } from './memu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemuPageRoutingModule
  ],
  declarations: [MemuPage]
})
export class MemuPageModule {}

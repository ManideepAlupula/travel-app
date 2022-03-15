import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelpagePageRoutingModule } from './travelpage-routing.module';

import { TravelpagePage } from './travelpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelpagePageRoutingModule
  ],
  declarations: [TravelpagePage]
})
export class TravelpagePageModule {}

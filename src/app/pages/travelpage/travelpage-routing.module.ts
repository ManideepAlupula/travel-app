import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelpagePage } from './travelpage.page';

const routes: Routes = [
  {
    path: '',
    component: TravelpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelpagePageRoutingModule {}

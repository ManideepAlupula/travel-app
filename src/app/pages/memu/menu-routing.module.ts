import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemuPage } from './memu.page';

const routes: Routes = [
  {
    path: '',
    component: MemuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemuPageRoutingModule {}

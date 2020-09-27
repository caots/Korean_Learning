import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiraWritingPage } from './hira-writing.page';

const routes: Routes = [
  {
    path: '',
    component: HiraWritingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiraWritingPageRoutingModule {}

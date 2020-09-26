import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnWritingPage } from './learn-writing.page';
import { ROUTING_PAGE } from 'src/app/constants/config';

const routes: Routes = [
  {
    path: '',
    component: LearnWritingPage
  },
  {
    path: ROUTING_PAGE.WRITING.LIST_wORD,
    loadChildren: () => import('./list-word/list-word.module').then( m => m.ListWordPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnWritingPageRoutingModule {}

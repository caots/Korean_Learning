import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListWordPage } from './list-word.page';
import { ROUTING_PAGE } from 'src/app/constants/config';

const routes: Routes = [
  {
    path: '',
    component: ListWordPage
  },
  {
    path: `${ROUTING_PAGE.WRITING.WRITING}/:id`,
    loadChildren: () => import('./../writing/hira-writing.module').then( m => m.HiraWritingPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListWordPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ROUTING_PAGE } from 'src/app/constants/config';

const routes: Routes = [

  {
    path: ROUTING_PAGE.TABS.PARENT,
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: ROUTING_PAGE.WRITING.PARENT,
    loadChildren: () => import('./pages/learn-writing/learn-writing.module').then( m => m.LearnWritingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

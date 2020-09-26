import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListWordPageRoutingModule } from './list-word-routing.module';

import { ListWordPage } from './list-word.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListWordPageRoutingModule
  ],
  declarations: [ListWordPage]
})
export class ListWordPageModule {}

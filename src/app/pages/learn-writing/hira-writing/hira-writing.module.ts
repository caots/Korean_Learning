import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiraWritingPageRoutingModule } from './hira-writing-routing.module';

import { HiraWritingPage } from './hira-writing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiraWritingPageRoutingModule
  ],
  declarations: [HiraWritingPage]
})
export class HiraWritingPageModule {}

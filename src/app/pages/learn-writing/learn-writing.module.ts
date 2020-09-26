import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnWritingPageRoutingModule } from './learn-writing-routing.module';
import {HiraWritingPageModule} from './hira-writing/hira-writing.module'

import { LearnWritingPage } from './learn-writing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnWritingPageRoutingModule,
    HiraWritingPageModule
  ],
  declarations: [LearnWritingPage]
})
export class LearnWritingPageModule {}

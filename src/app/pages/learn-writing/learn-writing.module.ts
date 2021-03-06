import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnWritingPageRoutingModule } from './learn-writing-routing.module';
import {HiraWritingPageModule} from './writing/hira-writing.module'
import { File } from '@ionic-native/file/ngx';

import { LearnWritingPage } from './learn-writing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnWritingPageRoutingModule,
    HiraWritingPageModule,
  ],
  declarations: [LearnWritingPage],
  providers:[
    File
  ]
})
export class LearnWritingPageModule {}

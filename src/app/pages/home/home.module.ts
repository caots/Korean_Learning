import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ProgressBarModule} from "angular-progress-bar"
import { HomePageRoutingModule } from './home-routing.module';
import {SkeletonModule} from '../../components/skeleton/skeleton.module'
import {TopicCardModule} from './../../components/topic-card/topic-card.module'
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SkeletonModule,
    TopicCardModule,
    ProgressBarModule
  ],
  declarations: [HomePage,]
})
export class HomePageModule {}

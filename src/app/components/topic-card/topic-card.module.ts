import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopicCardComponent } from './topic-card.component';


const components = [
  TopicCardComponent,
];
@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [...components],
  exports: [...components]
})
export class TopicCardModule {}

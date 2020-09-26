import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SkeletonComponent } from './skeleton.component';


const components = [
    SkeletonComponent,
];
@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [...components],
  exports: [...components]
})
export class SkeletonModule {}

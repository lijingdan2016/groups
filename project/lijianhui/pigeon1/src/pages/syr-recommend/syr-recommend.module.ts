import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyrRecommendPage } from './syr-recommend';

@NgModule({
  declarations: [
    SyrRecommendPage,
  ],
  imports: [
    IonicPageModule.forChild(SyrRecommendPage),
  ],
})
export class SyrRecommendPageModule {}

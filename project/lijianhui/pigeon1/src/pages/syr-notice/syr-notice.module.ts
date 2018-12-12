import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyrNoticePage } from './syr-notice';

@NgModule({
  declarations: [
    SyrNoticePage,
  ],
  imports: [
    IonicPageModule.forChild(SyrNoticePage),
  ],
})
export class SyrNoticePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyrDailyPage } from './syr-daily';

@NgModule({
  declarations: [
    SyrDailyPage,
  ],
  imports: [
    IonicPageModule.forChild(SyrDailyPage),
  ],
})
export class SyrDailyPageModule {}

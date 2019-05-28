import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WjMyPage } from './wj-my';

@NgModule({
  declarations: [
    WjMyPage,
  ],
  imports: [
    IonicPageModule.forChild(WjMyPage),
  ],
})
export class WjMyPageModule {}

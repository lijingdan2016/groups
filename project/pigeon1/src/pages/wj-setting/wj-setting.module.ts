import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WjSettingPage } from './wj-setting';

@NgModule({
  declarations: [
    WjSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(WjSettingPage),
  ],
})
export class WjSettingPageModule {}

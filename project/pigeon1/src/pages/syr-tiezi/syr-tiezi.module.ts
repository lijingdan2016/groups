import { NgModule } from '@angular/core';
import { IonicPageModule, Config, ViewController } from 'ionic-angular';
import { SyrTieziPage } from './syr-tiezi';

@NgModule({
  declarations: [
    SyrTieziPage,
  ],
  imports: [
    IonicPageModule.forChild(SyrTieziPage),

  ],
})
export class SyrTieziPageModule {}

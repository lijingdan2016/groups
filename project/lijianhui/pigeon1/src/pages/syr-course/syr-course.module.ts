import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyrCoursePage } from './syr-course';

@NgModule({
  declarations: [
    SyrCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(SyrCoursePage),
  ],
})
export class SyrCoursePageModule {}

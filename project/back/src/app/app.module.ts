import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShouyeComponent } from './components/shouye/shouye.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
// import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [
    AppComponent,
    ShouyeComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    // NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

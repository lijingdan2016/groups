import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WjMyPage } from '../pages/wj-my/wj-my';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WjClassPage } from '../pages/wj-class/wj-class';
import { WjHeartPage } from '../pages/wj-heart/wj-heart';
import { WjUpdatePage } from '../pages/wj-update/wj-update';
import { WjSettingPage } from '../pages/wj-setting/wj-setting';
import { HshDlPage } from '../pages/hsh-dl/hsh-dl';
import { WjZcPage } from '../pages/wj-zc/wj-zc';
import { KrfKcbPage } from '../pages/krf-kcb/krf-kcb';
import { KrfLrcjPage } from '../pages/krf-lrcj/krf-lrcj';
import { SyrSqPage } from '../pages/syr-sq/syr-sq';
import { NamePage } from '../pages/name/name';
import { TxlPage } from '../pages/txl/txl';
import { LjhcjbjPage } from '../pages/ljhcjbj/ljhcjbj';
import { LjhjrbjPage } from '../pages/ljhjrbj/ljhjrbj';
import { LjhltPage } from '../pages/ljhlt/ljhlt';
import { LjhtjpyPage } from '../pages/ljhtjpy/ljhtjpy';
import { HshLityPage } from '../pages/hsh-lity/hsh-lity';
import { IonicStorageModule } from '@ionic/storage';
import { HshSfxzPage } from '../pages/hsh-sfxz/hsh-sfxz';
import { LjdCkcjPage } from '../pages/ljd-ckcj/ljd-ckcj';
import { LjdPsbxPage } from '../pages/ljd-psbx/ljd-psbx';
import { WjKqPage } from '../pages/wj-kq/wj-kq';
import { SyrHomeparPage } from '../pages/syr-homepar/syr-homepar';
import { Tabs2Page } from '../pages/tabs2/tabs2';
import { LjdJczyPage } from '../pages/ljd-jczy/ljd-jczy';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WjMyPage,
    WjClassPage,
    WjHeartPage,
    WjUpdatePage,
    WjSettingPage,
    HshDlPage,
    HshLityPage,
    HshSfxzPage,
    WjZcPage,
    KrfKcbPage,
    KrfLrcjPage,
    SyrSqPage,
    NamePage,
    TxlPage,
    LjhcjbjPage,
    LjhjrbjPage,
    LjhltPage,
    LjhtjpyPage,
    LjdCkcjPage,
    LjdPsbxPage,
    LjhcjbjPage,
    WjKqPage,
    SyrHomeparPage,
    Tabs2Page,
    LjdJczyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      // backButtonText:'取消'
    }),
    IonicStorageModule.forRoot()
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WjMyPage,
    WjClassPage,
    WjHeartPage,
    WjUpdatePage,
    WjSettingPage,
    HshDlPage,
    WjZcPage,
    KrfKcbPage,
    KrfLrcjPage,
    SyrSqPage,
    NamePage,
    TxlPage,
    LjhcjbjPage,
    LjhjrbjPage,
    LjhltPage,
    LjhtjpyPage,
    HshLityPage,
    HshSfxzPage,
    LjdCkcjPage,
    LjdPsbxPage,
    LjhcjbjPage,
    HomePage,
    WjKqPage,
    SyrHomeparPage,
    Tabs2Page,
    LjdJczyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

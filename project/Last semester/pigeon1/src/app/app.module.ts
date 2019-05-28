import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
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

import { KrfFbrwPage } from '../pages/krf-fbrw/krf-fbrw';
import { KrfLrcjPage } from '../pages/krf-lrcj/krf-lrcj';
import { SyrSqPage } from '../pages/syr-sq/syr-sq';
import { NamePage } from '../pages/name/name';
import { TxlPage } from '../pages/txl/txl';
import { LjhcjbjPage } from '../pages/ljhcjbj/ljhcjbj';
import { LjhjrbjPage } from '../pages/ljhjrbj/ljhjrbj';
import { LjhltPage } from '../pages/ljhlt/ljhlt';

import { HshLityPage } from '../pages/hsh-lity/hsh-lity';
import { IonicStorageModule } from '@ionic/storage';
import { HshSfxzPage } from '../pages/hsh-sfxz/hsh-sfxz';
import { LjdCkcjPage } from '../pages/ljd-ckcj/ljd-ckcj';
import { LjdPsbxPage } from '../pages/ljd-psbx/ljd-psbx';
import { WjKqPage } from '../pages/wj-kq/wj-kq';
import { SyrHome1Page } from '../pages/syr-home1/syr-home1';
import { SyrHome2Page } from '../pages/syr-home2/syr-home2';
import { Tabs2Page } from '../pages/tabs2/tabs2';
import { LjdJczyPage } from '../pages/ljd-jczy/ljd-jczy';
import { WjDetail1Page } from '../pages/wj-detail1/wj-detail1';
import { WjTouxiangPage } from '../pages/wj-touxiang/wj-touxiang';
import { WjGxqmPage } from '../pages/wj-gxqm/wj-gxqm';
import { HttpClientModule  } from '@angular/common/http';
import { LjhqrjrPage } from '../pages/ljhqrjr/ljhqrjr';
import { LjhtjpyPage } from '../pages/ljhtjpy/ljhtjpy';
import { LjhcjcgPage } from '../pages/ljhcjcg/ljhcjcg';
import { Name2Page } from '../pages/name2/name2';
import { HshstuidPage } from '../pages/hshstuid/hshstuid';
//import { KrfKcbPage } from '../pages/krf-kcb/krf-kcb';
import { SyrNoticePage } from '../pages/syr-notice/syr-notice'; 
import { SyrTeacherrulePage } from '../pages/syr-teacherrule/syr-teacherrule';
import { SyrSchoolrulePage } from '../pages/syr-schoolrule/syr-schoolrule';
import { SyrDailyPage } from '../pages/syr-daily/syr-daily';
import { SyrSousuoPage } from '../pages/syr-sousuo/syr-sousuo';
import { SyrClassPage } from '../pages/syr-class/syr-class';
import { SyrRecommendPage } from '../pages/syr-recommend/syr-recommend';
import { SyrExamPage } from '../pages/syr-exam/syr-exam';
import { SyrCoursePage } from '../pages/syr-course/syr-course';
import { SyrEssayPage } from '../pages/syr-essay/syr-essay';
import { SyrTieziPage } from '../pages/syr-tiezi/syr-tiezi';
import { KrfKcbPage } from '../pages/krf-kcb/krf-kcb';
import { LjdKcbPage } from '../pages/ljd-kcb/ljd-kcb';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    WjMyPage,
    WjClassPage,
    WjHeartPage,
    WjUpdatePage,
    WjSettingPage,
    HshDlPage,
    HshLityPage,
    HshSfxzPage,
    HshstuidPage,
    WjZcPage,
   // KrfKcbPage,
    KrfFbrwPage,
    KrfLrcjPage,
    SyrSqPage,
    NamePage,
    Name2Page,
    TxlPage,
    LjhcjbjPage,
    LjhjrbjPage,
    LjhltPage,
    LjhtjpyPage,
    LjdCkcjPage,
    LjdPsbxPage,
    LjhcjbjPage,
    LjhqrjrPage,
    LjhcjcgPage,
    WjKqPage,
    SyrHome2Page,
    Tabs2Page,
    SyrHome1Page,
    LjdJczyPage,
    WjDetail1Page,
    WjTouxiangPage,
    WjGxqmPage,
    SyrNoticePage,
    SyrTeacherrulePage,
    SyrSchoolrulePage,
    SyrDailyPage,
    SyrSousuoPage,
    SyrClassPage,
    SyrRecommendPage,
    SyrExamPage,
    SyrCoursePage,
    SyrEssayPage,
    SyrTieziPage,
    KrfKcbPage,
    LjdKcbPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    TabsPage,
    WjMyPage,
    WjClassPage,
    WjHeartPage,
    WjUpdatePage,
    WjSettingPage,
    HshDlPage,
    HshstuidPage,
    WjZcPage,
   // KrfKcbPage,
    KrfFbrwPage,
    KrfLrcjPage,
    SyrSqPage,
    NamePage,
    Name2Page,
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
    LjhqrjrPage,
    LjhcjcgPage,
    WjKqPage,
    SyrHome2Page,
    Tabs2Page,
    SyrHome1Page,
    LjdJczyPage,
    WjDetail1Page,
    WjTouxiangPage,
    WjGxqmPage,
    SyrNoticePage,
    SyrTeacherrulePage,
    SyrSchoolrulePage,
    SyrDailyPage,
    SyrSousuoPage,
    SyrClassPage,
    SyrRecommendPage,
    SyrExamPage,
    SyrCoursePage,
    SyrEssayPage,
    SyrTieziPage,
    KrfKcbPage,
    LjdKcbPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}

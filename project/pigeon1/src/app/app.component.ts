import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { HshDlPage } from '../pages/hsh-dl/hsh-dl';
import { HshLityPage } from '../pages/hsh-lity/hsh-lity';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage:Storage) {
    this.storage.get('firstIn').then((result)=>{
      // console.log('firstIn is',result);
      result = false;
      if(result){
        this.rootPage = HshDlPage;
      }
      else{
        this.storage.set('firstIn',true);
        this.rootPage = HshLityPage;
      }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

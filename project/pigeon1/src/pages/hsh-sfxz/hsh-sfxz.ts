import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Tabs2Page } from '../tabs2/tabs2';

/**
 * Generated class for the HshSfxzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hsh-sfxz',
  templateUrl: 'hsh-sfxz.html',
})
export class HshSfxzPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome1(){
    this.navCtrl.setRoot(TabsPage);
  }
  goToHome2(){
    this.navCtrl.push(Tabs2Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HshSfxzPage');
  }

}

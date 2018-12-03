import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HshDlPage } from '../hsh-dl/hsh-dl';

/**
 * Generated class for the WjSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wj-setting',
  templateUrl: 'wj-setting.html',
})
export class WjSettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WjSettingPage');
  }
  exit(){
    this.navCtrl.push(HshDlPage);
  }
}

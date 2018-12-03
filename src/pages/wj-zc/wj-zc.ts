import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HshDlPage } from '../hsh-dl/hsh-dl';

/**
 * Generated class for the WjZcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wj-zc',
  templateUrl: 'wj-zc.html',
})
export class WjZcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WjZcPage');
  }
  fanhui(){
    this.navCtrl.push(HshDlPage);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WjZcPage } from '../wj-zc/wj-zc';
import { HshSfxzPage } from '../hsh-sfxz/hsh-sfxz';
// import { IdentityPage } from '../identity/identity';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hsh-dl',
  templateUrl: 'hsh-dl.html',
})
export class HshDlPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sfxz(){
    this.navCtrl.setRoot(HshSfxzPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  zuce(){
    this.navCtrl.push(WjZcPage);
  }

}

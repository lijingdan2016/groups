import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LjdPsbxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ljd-psbx',
  templateUrl: 'ljd-psbx.html',
})
export class LjdPsbxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  fanhui2(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LjdPsbxPage');
  }

}

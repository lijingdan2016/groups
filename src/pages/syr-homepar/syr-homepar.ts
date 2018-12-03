import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LjdCkcjPage } from '../ljd-ckcj/ljd-ckcj';
import { LjdJczyPage } from '../ljd-jczy/ljd-jczy';
import { LjdPsbxPage } from '../ljd-psbx/ljd-psbx';

/**
 * Generated class for the SyrHomeparPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-homepar',
  templateUrl: 'syr-homepar.html',
})
export class SyrHomeparPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goccj(){
    this.navCtrl.push(LjdCkcjPage);
  }
  gockzy(){
    this.navCtrl.push(LjdJczyPage);
  }
  gopsbx(){
    this.navCtrl.push(LjdPsbxPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SyrHomeparPage');
  }

}

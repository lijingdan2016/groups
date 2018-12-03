import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WjClassPage } from '../wj-class/wj-class';
import { WjHeartPage } from '../wj-heart/wj-heart';
import { WjUpdatePage } from '../wj-update/wj-update';
import { WjSettingPage } from '../wj-setting/wj-setting';
import { WjGxqmPage } from '../wj-gxqm/wj-gxqm';
import { WjTouxiangPage } from '../wj-touxiang/wj-touxiang';

/**
 * Generated class for the WjMyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wj-my',
  templateUrl: 'wj-my.html',
})
export class WjMyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WjMyPage');
  }
  push1(){
    this.navCtrl.push(WjClassPage);
  }
  push2(){
    this.navCtrl.push(WjHeartPage);
  }
  push4(){
    this.navCtrl.push(WjUpdatePage);
  }
  push5(){
    this.navCtrl.push(WjSettingPage);
  }
  bj(){
    this.navCtrl.push(WjGxqmPage);
  }
  tx(){
    this.navCtrl.push(WjTouxiangPage);
  }


}

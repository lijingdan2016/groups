import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WjKqPage } from '../wj-kq/wj-kq';
import { KrfLrcjPage } from '../krf-lrcj/krf-lrcj';
import { KrfFbrwPage } from '../krf-fbrw/krf-fbrw';

/**
 * Generated class for the SyrHome1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-home1',
  templateUrl: 'syr-home1.html',
})
export class SyrHome1Page {

  lrcj(){
    this.navCtrl.push('KrfLrcjPage');
  }
  kq(){
    this.navCtrl.push(WjKqPage);
  }
  gosub1(){
    this.navCtrl.push('SyrNoticePage',{id:1});
  }
  gosub2(){
    this.navCtrl.push('SyrTeacherrulePage',{id:2});
  }
  gosub3(){
    this.navCtrl.push('SyrSchoolrulePage',{id:3});
  }
  gosub4(){
    this.navCtrl.push('SyrDailyPage',{id:4});
  }
  gosub5(){
    this.navCtrl.push('SyrSousuoPage',{id:5});
  }

  fbrw(){
    this.navCtrl.push('KrfFbrwPage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyrHome1Page');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WjKqPage } from '../wj-kq/wj-kq';
import { KrfLrcjPage } from '../krf-lrcj/krf-lrcj';
import { KrfFbrwPage } from '../krf-fbrw/krf-fbrw';
import { SyrNoticePage } from '../syr-notice/syr-notice';
import { SyrTeacherrulePage } from '../syr-teacherrule/syr-teacherrule';
import { SyrSchoolrulePage } from '../syr-schoolrule/syr-schoolrule';
import { SyrDailyPage } from '../syr-daily/syr-daily';
import { SyrSousuoPage } from '../syr-sousuo/syr-sousuo';
@IonicPage()
@Component({
  selector: 'page-syr-home1',
  templateUrl: 'syr-home1.html',
})
export class SyrHome1Page {

  lrcj(){
    this.navCtrl.push(KrfLrcjPage);
  }
  kq(){
    this.navCtrl.push(WjKqPage);
  }
  gosub1(){
    this.navCtrl.push(SyrNoticePage,{id:1});
  }
  gosub2(){
    this.navCtrl.push(SyrTeacherrulePage,{id:2});
  }
  gosub3(){
    this.navCtrl.push(SyrSchoolrulePage,{id:3});
  }
  gosub4(){
    this.navCtrl.push(SyrDailyPage,{id:4});
  }
  gosub5(){
    this.navCtrl.push(SyrSousuoPage,{id:5});
  }

  fbrw(){
    this.navCtrl.push(KrfFbrwPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SyrHome1Page');
  }

}

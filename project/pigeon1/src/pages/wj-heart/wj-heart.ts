import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WjDetail1Page } from '../wj-detail1/wj-detail1';

/**
 * Generated class for the WjHeartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wj-heart',
  templateUrl: 'wj-heart.html',
})
export class WjHeartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WjHeartPage');
  }
  detail(){
    this.navCtrl.push(WjDetail1Page);
  }
}

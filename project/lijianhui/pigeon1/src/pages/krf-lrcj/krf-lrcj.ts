import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrHome1Page } from '../syr-home1/syr-home1';

/**
 * Generated class for the KrfLrcjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-krf-lrcj',
  templateUrl: 'krf-lrcj.html',
})
export class KrfLrcjPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KrfLrcjPage');
  }

  goSub(){
    this.navCtrl.push(SyrHome1Page);
  }
}

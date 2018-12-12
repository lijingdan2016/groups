import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrHome2Page } from '../syr-home2/syr-home2';

/**
 * Generated class for the KrfKcbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-krf-kcb',
  templateUrl: 'krf-kcb.html',
})
export class KrfKcbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KrfKcbPage');
  }

  butt(){
    this.navCtrl.push(SyrHome2Page);
  }
}

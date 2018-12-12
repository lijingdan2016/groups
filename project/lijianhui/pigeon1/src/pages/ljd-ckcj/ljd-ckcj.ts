import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrHome2Page } from '../syr-home2/syr-home2';

/**
 * Generated class for the LjdCkcjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ljd-ckcj',
  templateUrl: 'ljd-ckcj.html',
})
export class LjdCkcjPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LjdCkcjPage');
  }
}

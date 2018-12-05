import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrHome1Page } from '../syr-home1/syr-home1';

@IonicPage()
@Component({
  selector: 'page-krf-fbrw',
  templateUrl: 'krf-fbrw.html',
})
export class KrfFbrwPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KrfLrcjPage');
  }

  return(){
    this.navCtrl.push(SyrHome1Page);
  }
}

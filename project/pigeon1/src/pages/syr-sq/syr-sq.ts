import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SyrSqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-sq',
  templateUrl: 'syr-sq.html',
})
export class SyrSqPage {

  isActive = 1;
  isClick(i){
    this.isActive = i;
  }

  gosub(){
    this.navCtrl.push('SyrSousuoPage',{id:2});
  }

  gosub1(){
    this.navCtrl.push('SyrEssayPage',{id:3});
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  send(){
    this.navCtrl.push('SyrTieziPage',{id:1});
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyrSqPage');
  }

}

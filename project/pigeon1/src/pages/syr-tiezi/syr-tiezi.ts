import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrSqPage } from '../syr-sq/syr-sq';

/**
 * Generated class for the SyrTieziPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-tiezi',
  templateUrl: 'syr-tiezi.html',
})
export class SyrTieziPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SyrTieziPage');
  }

  // ionViewDidEnter(){
  //   let elements = document.querySelectorAll(".tabbar");
  //   if (elements != null) {
  //      Object.keys(elements).map((key) => {
  //         elements[key].style.display = 'none';
  //        });
  //      }   
  // }
  quxiao(){
    this.navCtrl.push(SyrSqPage);
  }

  


}

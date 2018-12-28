import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HshDlPage } from '../hsh-dl/hsh-dl';

/**
 * Generated class for the HshLityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hsh-lity',
  templateUrl: 'hsh-lity.html',
})
export class HshLityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome(){
    this.navCtrl.setRoot(HshDlPage);
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad HshLityPage');
  }

}

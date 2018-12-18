import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { WjClassdetailPage } from '../wj-classdetail/wj-classdetail';

/**
 * Generated class for the WjClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wj-class',
  templateUrl: 'wj-class.html',
})
export class WjClassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    
  }
  openModal(characterNum) {
    let modal = this.modalCtrl.create(WjClassdetailPage, characterNum);
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WjClassPage');
  }

}

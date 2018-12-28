import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the WjUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wj-update',
  templateUrl: 'wj-update.html',
})
export class WjUpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WjUpdatePage');
  }
  showAlert(){
    const alert = this.alertCtrl.create({
      title: '下载信息',
      subTitle: '您已成功下载 鸽子已更新！',
      buttons: ['好的']
    });
    alert.present();
  }

}

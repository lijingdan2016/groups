import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HshDlPage } from '../hsh-dl/hsh-dl';

/**
 * Generated class for the WjZcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wj-zc',
  templateUrl: 'wj-zc.html',
})
export class WjZcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      // alert(userinfo);
      console.log(userinfo);
      this.navCtrl.push(HshDlPage,userinfo);
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WjZcPage');
  }
  fanhui(){
    this.navCtrl.push(HshDlPage);
  }
}

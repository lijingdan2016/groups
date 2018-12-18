import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WjZcPage } from '../wj-zc/wj-zc';
import { HshSfxzPage } from '../hsh-sfxz/hsh-sfxz';
// import { IdentityPage } from '../identity/identity';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hsh-dl',
  templateUrl: 'hsh-dl.html',
})
export class HshDlPage {

  userinfo;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userinfo = navParams.data;
  }

  sfxz(username: HTMLInputElement, password: HTMLInputElement){
    /* if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userinfo1:string = '用户名：' + username.value + '密码：' + password.value;
      if(userinfo1!=this.userinfo){
        alert('用户名错误或密码错误！')
      }else{
        this.navCtrl.push(HshSfxzPage);
      }
    } */
    this.navCtrl.push(HshSfxzPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  zuce(){
    this.navCtrl.push(WjZcPage);
  }

}

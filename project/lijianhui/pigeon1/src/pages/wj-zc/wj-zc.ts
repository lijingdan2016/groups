import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HshDlPage } from '../hsh-dl/hsh-dl';
import { HttpClient,HttpHeaders } from '@angular/common/http';

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
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
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
    };
    let a={name:username.value,password:password.value};
    this.http.post('/login/registe',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      console.log(data);
    
    })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WjZcPage');
  }
  fanhui(){
    this.navCtrl.push(HshDlPage);
  }
}

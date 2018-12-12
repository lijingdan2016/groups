import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WjZcPage } from '../wj-zc/wj-zc';
import { HshSfxzPage } from '../hsh-sfxz/hsh-sfxz';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  class_id:Number;
  class;
  userinfo;
  constructor(public toastCtrl: ToastController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    // this.userinfo = navParams.data;
  }
  private headers = new HttpHeaders({'Content-Type':'application/json'});// 请求头

  sfxz(username: HTMLInputElement, password: HTMLInputElement){
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      // let userinfo1:string = '用户名：' + username.value + '密码：' + password.value;
      // if(userinfo1!=this.userinfo){
      //   alert('用户名错误或密码错误！')
      // }else{
      //   this.navCtrl.push(HshSfxzPage);
      // }
    }
    //需要post请求
    this.http.post('/login/data', {name: username.value, password: password.value} ,{
      headers : this.headers,
      observe : 'body',
      // params : {name: username.value, psw: password.value},
      responseType : 'json'
    }).subscribe(data => {
      console.log(data);

      if( !data) {
        this.showToast('bottom','用户名或密码错误，请重新输入！');
        return ;
      } else{
        this.navCtrl.push(HshSfxzPage)
      }
    });
    
 }
  // sfxz(){
  //   this.navCtrl.push(HshSfxzPage);
  // }
  

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // this.http.post('/login/del',this.data).subscribe(data=>{
    //   console.log(data);
    // })
  }
  
  zuce(){
 
    this.navCtrl.push(WjZcPage);
  }

}

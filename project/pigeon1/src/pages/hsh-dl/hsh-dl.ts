import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { WjZcPage } from '../wj-zc/wj-zc';
import { HshSfxzPage } from '../hsh-sfxz/hsh-sfxz';
import { HttpClient , HttpHeaders } from'@angular/common/http'
import { TabsPage } from '../tabs/tabs';
import { Tabs2Page } from '../tabs2/tabs2';
import { ModalController } from 'ionic-angular';
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

  //userinfo;
  constructor(public modalCtrl: ModalController,public toastCtrl: ToastController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.userinfo = navParams.data;
  }

  private headers = new HttpHeaders({'Content-Type':'application/json'});// 请求头
  userinfo;

  sfxz(username: HTMLInputElement, password: HTMLInputElement){
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
    
    let a={name:username.value,password:password.value};
    
    this.http.post('/login/search',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      // console.log(data);
      
      localStorage.setItem('user_id',a.name);//本地存储user_id
      if(JSON.stringify(data) === '[]' || data===null) {
        this.showToast('bottom','用户名或密码错误，请重新输入！');
        return ;
        }//else{
      //    let ddd= JSON.stringify(data);
      //    username.value=ddd;
      //  }
       else if(/(家长)/.test(JSON.stringify(data))){
            this.navCtrl.push(Tabs2Page);
          
      }else if(/(老师)/.test(JSON.stringify(data))){
        this.navCtrl.push(TabsPage);
      
      }else{
        let profileModal = this.modalCtrl.create(HshSfxzPage, a);
        profileModal.present();
      }
    });
    
    }

    
  }
  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }
  zuce(){
    this.navCtrl.push(WjZcPage);
  }

}

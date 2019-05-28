import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Tabs2Page } from '../tabs2/tabs2';
/**
 * Generated class for the HshstuidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hshstuid',
  templateUrl: 'hshstuid.html',
})
export class HshstuidPage {

  a;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public toastCtrl: ToastController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.a = navParams.data;
  }

  pushId(studentid:HTMLInputElement){
    localStorage.setItem('stu_id',studentid.value);
    if (studentid.value.length == 0) {
      alert("请输入账号");
    }else{
    let b ={name:this.navParams.get('name'),password:this.navParams.get('password'),stu_id:studentid.value}
    this.http.post('/login/stuid',b,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }).subscribe(data=>{
      
      console.log(data);
      
    })
    this.navCtrl.push(Tabs2Page);
    }
    

    
  }
  ionViewDidLoad() {
    let modelData: string = '用户名：' + this.navParams.get('name')+'密码：'+ this.navParams.get('password');
    console.log('ionViewDidLoad HshStuidPage');
    console.log(modelData);
  }

}

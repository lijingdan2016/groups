import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HshDlPage } from '../hsh-dl/hsh-dl';
import { WjTouxiangPage } from '../wj-touxiang/wj-touxiang';
import { WjGxqmPage } from '../wj-gxqm/wj-gxqm';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-wj-setting',
  templateUrl: 'wj-setting.html',
})
export class WjSettingPage {
  signa:Object;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WjSettingPage');
    this.signout();
  }
  exit(){
    this.navCtrl.push(HshDlPage);
  }
  touxiang(){
    this.navCtrl.push(WjTouxiangPage);
  }
  gx(){
    this.navCtrl.push(WjGxqmPage);
  }
  signout(){
    let userid=localStorage.getItem('user_id');    
    // console.log(userid);
    let a={uid:userid};
    this.http.post('/gxqm/data',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{
      // console.log(data);
      this.signa=data;
    });
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WjClassPage } from '../wj-class/wj-class';
import { WjHeartPage } from '../wj-heart/wj-heart';
import { WjUpdatePage } from '../wj-update/wj-update';
import { WjSettingPage } from '../wj-setting/wj-setting';
import { WjGxqmPage } from '../wj-gxqm/wj-gxqm';
import { WjTouxiangPage } from '../wj-touxiang/wj-touxiang';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Events } from 'ionic-angular';  
@IonicPage()
@Component({
  selector: 'page-wj-my',
  templateUrl: 'wj-my.html',
})
export class WjMyPage {
  // message=new message;
  signa:Object;
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public events: Events){
   
  }
  ionViewDidLoad() {
    this.signout();
    // this.ding();
  }

  push1(){
    this.navCtrl.push(WjClassPage);
  }
  push2(){
    this.navCtrl.push(WjHeartPage);
  }
  push4(){
    this.navCtrl.push(WjUpdatePage);
  }
  push5(){
    this.navCtrl.push(WjSettingPage);
  }
  bj(){
    this.navCtrl.push(WjGxqmPage);
  }
  tx(){
    this.navCtrl.push(WjTouxiangPage);
  }
  signout(){
    let userid=localStorage.getItem('user_id');  
    // let nc1=localStorage.getItem('nc');  
    // let gxqm1=localStorage.getItem('gxqm');
    // console.log(userid);
    let a={uid:userid};
    this.http.post('/gxqm/data',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{
      console.log(data);
     
      this.signa=data;
    
    });
  }

  syr(){
    let userid=localStorage.getItem('user_id');  
    // let nc1=localStorage.getItem('nc');  
    // let gxqm1=localStorage.getItem('gxqm');
    // console.log(userid);
    let a={uid:userid};
    this.http.post('/gxqm/data',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{
      //console.log(data);
     
      this.signa=data;
    
    });
  }
  // ding(){
  //   this.events.subscribe('nc', (nc) => {
  //     this.message.mc=nc;
  //   });
  //   this.events.subscribe('gxqm', (gxqm) => {
  //     this.message.qm=gxqm;
  //   });
  // }

}
// class message{
//   public mc:string;  //名称
//   public qm:string;   //签名
// }

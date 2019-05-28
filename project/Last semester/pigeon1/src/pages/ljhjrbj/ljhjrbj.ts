import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LjhqrjrPage } from '../ljhqrjr/ljhqrjr';
/**
 * Generated class for the LjhjrbjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ljhjrbj',
  templateUrl: 'ljhjrbj.html',
})
export class LjhjrbjPage {
  user_id;
  constructor(public toastCtrl:ToastController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  ionViewDidLoad() {
    console.log('ionViewDidLoad LjhjrbjPage');
    this.user_id=localStorage.getItem('user_id');//获取本地存储的user_id
  }
  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
  search(classid:HTMLInputElement){
    let a={user_id:this.user_id,classid:classid.value};//post传入要多传入一个user_id作为外键插入数据库
    this.http.post(
      '/class/search',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
      console.log(data);
      if(JSON.stringify(data) === '[]'){
        this.showToast('bottom','您搜索的班级不存在');
        
      }else{
        this.navCtrl.push(LjhqrjrPage);
      }

    });
    
   

  }

}


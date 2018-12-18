import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the LjhtjpyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-ljhtjpy',
  templateUrl: 'ljhtjpy.html',
})
export class LjhtjpyPage {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public toastCtrl:ToastController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LjhtjpyPage');
  }

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  find(userid:HTMLInputElement){
    let a={userid:userid.value};
    this.http.post('/class/friends',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      console.log(data);
      if(JSON.stringify(data) === '[]'){
        this.showToast('center','您搜索的账号不存在哦');
      }else{
        alert('添加成功')
      }
    })
  }



}
  

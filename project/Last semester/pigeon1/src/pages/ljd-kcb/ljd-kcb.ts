import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { KrfKcbPage } from '../krf-kcb/krf-kcb';
/**
 * Generated class for the LjdKcbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ljd-kcb',
  templateUrl: 'ljd-kcb.html',
})
export class LjdKcbPage {
constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
}
private headers = new HttpHeaders({'Content-Type':'application/json'});
  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  search(userid){
    if (userid.value.length == 0) {
      alert("请输入学号");
     } else {
      let a={userid:userid.value};
      console.log(a);
      this.http.post('/index1/search',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
        console.log(data);
       
        if(JSON.stringify(data) === '[]' || data===null){
          this.showToast('center','您搜索的账号不存在哦');
        }else{
          localStorage.setItem('idname',a.userid);
          alert('查询成功');
         this.navCtrl.push(KrfKcbPage);
        }
  })
}
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LjdKcbPage');
  }

}

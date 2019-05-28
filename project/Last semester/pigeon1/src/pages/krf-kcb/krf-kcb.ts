import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
/**
 * Generated class for the KrfKcbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-krf-kcb',
  templateUrl: 'krf-kcb.html',
})
export class KrfKcbPage {
score;
constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
}
private headers = new HttpHeaders({'Content-Type':'application/json'});
ionViewDidLoad() {
    console.log('ionViewDidLoad KrfKcbPage');
    
    let c= localStorage.getItem('idname');
    let a={userid:c}
    console.log(a);
    this.http.post('/index1/search',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      console.log(data);
      this.score=data;
  })

} 
}






class score{
  MonAM:string;
  MonPM:string;
  TueAM:string;
  TuePM:string;
  WedAM:string;
  WedPM:string;
  ThurAM:string;
  ThurPM:string;
  FriAM:string;
  FriPM:string;
  stu_id:number;
}

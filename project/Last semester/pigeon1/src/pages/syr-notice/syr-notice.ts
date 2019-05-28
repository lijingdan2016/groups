import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
/**
 * Generated class for the SyrNoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-notice',
  templateUrl: 'syr-notice.html',
})
export class SyrNoticePage {
  myEvent;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public viewCtrl:ViewController,public events: Events) {
  }
  
  ionViewDidLoad() {
  }
  save(student:HTMLInputElement,content: HTMLInputElement){
    let userid=localStorage.getItem('user_id');    
    console.log(userid);
    let sign: string = student.value+'的平时表现为' + content.value ;
    // console.log(sign);
    // this.navCtrl.push(sign);
    let a={uid:userid,stu:student.value,text:content.value};
    this.http.post('/teacher_behave/registe',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{
      console.log(data);
    })
    this.navCtrl.popToRoot();
  }

}

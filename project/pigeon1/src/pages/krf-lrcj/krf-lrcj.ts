import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrHome1Page } from '../syr-home1/syr-home1';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-krf-lrcj',
  templateUrl: 'krf-lrcj.html',
})
export class KrfLrcjPage {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad KrfLrcjPage');
  }

  // goSub(){
  //   this.navCtrl.push(SyrHome1Page);
  // }
save(score1:HTMLInputElement,score2:HTMLInputElement,score3:HTMLInputElement,student:HTMLInputElement,time:HTMLInputElement){
  
  let userid=localStorage.getItem('user_id');
  // let stuid=localStorage.getItem('stu_id');
  let a={chinese:score1.value,math:score2.value,english:score3.value,userid,stu:student.value,time1:time.value};
  // console.log(userid);
  // console.log(stuid);
  console.log(a);
  this.http.post('/index2/luru',a,{
    headers : this.headers,
    observe : 'body',
    responseType : 'json'
  }
 ).subscribe(data=>{
    // console.log(data);
})

}
}

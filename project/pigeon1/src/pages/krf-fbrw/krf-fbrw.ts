import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrHome1Page } from '../syr-home1/syr-home1';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

@IonicPage()
@Component({
  selector: 'page-krf-fbrw',
  templateUrl: 'krf-fbrw.html',
})
export class KrfFbrwPage {
  num:number=0;
  homework;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KrfLrcjPage');
  }
  task(a){
      this.num=a;
      if(a===1){
        let userid=localStorage.getItem('user_id');
        this.http.post('/task/check',{userid},{
          headers : this.headers,
          observe : 'body',
          responseType : 'json'
        }
        ).subscribe(data=>{
          console.log(data);
          this.homework=data;

        })
      }
  }
  save(id:HTMLInputElement,date:HTMLInputElement,content: HTMLInputElement){
    let userid=localStorage.getItem('user_id');    
    console.log(userid);
    // let sign: string = student.value+'的平时表现为' + content.value ;
    // console.log(sign);
    // this.navCtrl.push(sign);
    let a={uid:userid,class_id:id.value,date:date.value,text:content.value};
    this.http.post('/task/record',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{
      console.log(data);
    })
  }

 /*  return(){
    this.navCtrl.push(SyrHome1Page);
  } */
}

// class homework{
//   class_id:number;
//   user_id:number;
//   task_content:string;
//   task_data:DateTime;
// }

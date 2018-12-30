import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
/**
 * Generated class for the LjdCkcjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ljd-ckcj',
  templateUrl: 'ljd-ckcj.html',
})
export class LjdCkcjPage {
  score:Object;
  
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
  }
  
  chu(){
    let stu=localStorage.getItem('stu_id');
    console.log(stu);
    let a={stuid:stu};
    this.http.post('/index2/data2',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{ 
      this.score=data;
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LjdCkcjPage');
    // this.chu();
  }

}
class score{
  // student_id:number;
  // data:string;
  math:number;
  Chinese:number;
  english:number 
}

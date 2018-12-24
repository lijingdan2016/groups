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
  score;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
  }
  chu(){
    this.http.get('http://192.168.23.144:3000/index2/data2')
    .subscribe(data => {
      console.log(data); 
      this.score=data;
        }, err => {
      console.log('error');
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LjdCkcjPage');
  }

}
class score{
  student_id:number;
  data:string;
  math:number;
  Chinese:number;
  english:number 
}

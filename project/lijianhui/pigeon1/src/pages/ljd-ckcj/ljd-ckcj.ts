import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrHome2Page } from '../syr-home2/syr-home2';
import { HttpClient } from '@angular/common/http';
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
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LjdCkcjPage');
    this.http.get('/score/data').subscribe(data=>{
      console.log(data);
      this.score=data;
      
    })
  }
  
}
class score{
    student_id:number;
    data:string;
    math:number;
    chinese:number;
    english:number
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrHome1Page } from '../syr-home1/syr-home1';
import { HttpClient, HttpHeaders } from "@angular/common/http";

/**
 * Generated class for the KrfLrcjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-krf-lrcj',
  templateUrl: 'krf-lrcj.html',
})
export class KrfLrcjPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  ionViewDidLoad() {
    console.log('ionViewDidLoad KrfLrcjPage');
  }

  goSub(){
    this.navCtrl.push(SyrHome1Page);
  }
save(score1,score2,score3){
  let a={chinese:score1.value,math:score2.value,english:score3.value};
  console.log(a);
  this.http.post('/index2/score33',a,{
    headers : this.headers,
    observe : 'body',
    responseType : 'json'
  }
 ).subscribe(data=>{
    console.log(data);

})

}
}

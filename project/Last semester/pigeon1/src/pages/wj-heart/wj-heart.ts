import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WjDetail1Page } from '../wj-detail1/wj-detail1';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the WjHeartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wj-heart',
  templateUrl: 'wj-heart.html',
})
export class WjHeartPage {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  message: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }
  // showdata(){
  //   this.http.post('/heart/data' ,{
  //     headers : this.headers,
  //     observe : 'body',
  //   }).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  ionViewDidLoad() {
      this.http.post('/heart/data' ,{},{
        headers : this.headers,
        observe : 'body',
      }).subscribe(data => {
        // console.log(data);
        this.message=data;
      });
    
  }
  
  detail(){
    this.navCtrl.push(WjDetail1Page);
  } 
  
}
class message{
  
      public pushname:string;
      public ontime:Date;
      public title:string
      
}

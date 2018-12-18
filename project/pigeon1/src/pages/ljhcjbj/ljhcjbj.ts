import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LjhcjcgPage } from '../ljhcjcg/ljhcjcg';
/**
 * Generated class for the LjhcjbjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-ljhcjbj',
  templateUrl: 'ljhcjbj.html',
})
export class LjhcjbjPage {
  
  
  classid:Number;
  classname:string;
  classnum:Number;
  classinfo;
  //请求头
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.classinfo = navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LjhcjbjPage');
  }
  
  commit(cid:HTMLInputElement,cname:HTMLInputElement,cnum:HTMLInputElement,pname:HTMLInputElement){
    let a={cid:cid.value,cname:cname.value,cnum:cnum.value,pname:pname.value}
    this.http.post('/class/begin',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      console.log(data);
    
    })
    this.navCtrl.push(LjhcjcgPage);
  }

}
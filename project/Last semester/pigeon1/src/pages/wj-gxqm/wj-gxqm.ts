import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Events } from 'ionic-angular';  
@IonicPage()
@Component({
  selector: 'page-wj-gxqm',
  templateUrl: 'wj-gxqm.html',
})
export class WjGxqmPage {
  user = '来自Events的数据'
  message:Object;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public viewCtrl:ViewController,public events: Events) {
 
  }
  
  ionViewDidLoad() {
   
  }
  save(content: HTMLInputElement,content1:HTMLInputElement){
    var a1=localStorage.getItem('user_id');
    let a={userid:a1,text:content.value,text1:content1.value};
    this.events.publish('nc',a.text1);
    this.events.publish('gxqm',a.text);
    // localStorage.setItem('nc',content1.value);
    // localStorage.setItem('gxqm',content.value);
    this.http.post('/gxqm/registe',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{ 
    })

    this.navCtrl.popToRoot();
  }
  
}

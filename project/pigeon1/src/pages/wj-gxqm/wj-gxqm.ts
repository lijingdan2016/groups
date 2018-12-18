import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-wj-gxqm',
  templateUrl: 'wj-gxqm.html',
})
export class WjGxqmPage {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WjGxqmPage');
  }
  save(content: HTMLInputElement){
    let sign: string = '个性签名' + content.value ;
    console.log(sign);
    // this.navCtrl.push(sign);
    let a={text:content.value};
    this.http.post('/gxqm/registe',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{
      console.log(data);
    })
  }
  
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the LjhqrjrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ljhqrjr',
  templateUrl: 'ljhqrjr.html',
})
export class LjhqrjrPage {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  item;
  user_id;
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LjhqrjrPage');
    this.user_id=localStorage.getItem('user_id');
    let a={user_id:this.user_id}

    this.http.post('/class/myjoin_class',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      console.log(data);
      this.item=data;
    })
  }

}
class item{
  user_id:string;
  class_id:number;
}


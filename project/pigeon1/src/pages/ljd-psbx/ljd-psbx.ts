import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
/**
 * Generated class for the LjdPsbxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ljd-psbx',
  templateUrl: 'ljd-psbx.html',
})
export class LjdPsbxPage {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LjdPsbxPage');
  }
  look(student:HTMLInputElement){
    let a={stu:student.value};
    this.http.post('/parent_behave/registe',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{
      console.log(data);
    })
  }
}

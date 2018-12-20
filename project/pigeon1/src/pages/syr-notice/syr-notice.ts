import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
/**
 * Generated class for the SyrNoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-notice',
  templateUrl: 'syr-notice.html',
})
export class SyrNoticePage {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyrNoticePage');
  }
  save(student:HTMLInputElement,content: HTMLInputElement){
    let sign: string = student.value+'的平时表现为' + content.value ;
    console.log(sign);
    // this.navCtrl.push(sign);
    let a={stu:student.value,text:content.value};
    this.http.post('/teacher_behave/registe',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{
      console.log(data);
    })
  }

}

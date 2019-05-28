import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-ljd-psbx',
  templateUrl: 'ljd-psbx.html',
})
export class LjdPsbxPage {
  stu:Object;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public viewCtrl:ViewController,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LjdPsbxPage');
    this.look();
  }
  look(){
    let userid=localStorage.getItem('user_id');
    let stuid=localStorage.getItem('stu_id');
    console.log(stuid);
    // console.log(userid);
    let a={parentid:userid};
    this.http.post('/parent_behave/data',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
    ).subscribe(data=>{
      // console.log(data);
      let a = {stu:stuid};
      this.http.post('/parent_behave/registe',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
      ).subscribe(data1=>{
        console.log(data1);
        this.stu=data1;
      });
    });
  }
}
class stu{
  public user_id:string;
  public behave_content:string;
  public stu_id:string;
}

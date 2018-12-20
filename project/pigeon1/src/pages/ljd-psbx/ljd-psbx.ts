import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WjparbehavePage } from '../wjparbehave/wjparbehave';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public viewCtrl:ViewController,public toastCtrl:ToastController) {
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
      if(JSON.stringify(data) === '[]' || data===null) {
        this.showToast('bottom','学生学号输入错误，请重新输入！');
        return ;
        }else{
          this.navCtrl.push(WjparbehavePage,a);
        }
    })
  }
  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
}

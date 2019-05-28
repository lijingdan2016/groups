import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SyrTieziPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-tiezi',
  templateUrl: 'syr-tiezi.html',
})
export class SyrTieziPage {

  neirong:string = "";
  item;
  userid;
  
  

  private headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,private http: HttpClient, public toastCtrl: ToastController) {

    /* storage.ready().then(() => {
      storage.get('USER_INFO').then( value => {
        this.neirong = !!value ? JSON.parse(value).content : '';
      });
    }); */
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SyrTieziPage');
  }


 
  gosub1(content){
    this.userid = localStorage.getItem('user_id');

    if( !content.value) {
      this.showToast('top','请输入内容！');
      return false;
    }

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();

    //var mydate=date.toLocaleString(); 
    var mydate =year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;


    let data = {uid:this.userid,content:content.value,date:mydate};
    console.log(data);

    /* this.storage.remove("USER_INFO");
    this.storage.set("USER_INFO",JSON.stringify(data)); */

    this.http.post('/tiezi/tz', {uid:this.userid,content:content.value,date:mydate} ,{
      headers : this.headers,
      observe : 'body',
      // params : {name: username.value, psw: password.value},
      responseType : 'json'
    }).subscribe(data => {
      console.log(data);
    })

    if( !data) {
      this.showToast('top','内容不正确！');
      return ;
    } else {
      // 界面跳转
      this.navCtrl.popToRoot();
    }
  
    //this.navCtrl.popToRoot();
  }

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast); 
  }
 

  // ionViewDidEnter(){
  //   let elements = document.querySelectorAll(".tabbar");
  //   if (elements != null) {
  //      Object.keys(elements).map((key) => {
  //         elements[key].style.display = 'none';
  //        });
  //      }   
  // }
  

  


}
class A {
  constructor(public data:Array<Object>){}
} 

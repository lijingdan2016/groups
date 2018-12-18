import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the SyrSqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-sq',
  templateUrl: 'syr-sq.html',
})

export class SyrSqPage {
  items;
  newitems;
  data1;
  isActive = 1;
  userid:number;
  isClick(i){
    this.isActive = i;
    if(i = 2){

      this.http.get('/shequ/sq').subscribe(
        (data:A)=>{
          console.log(data.data);
          this.items = data.data; 
          console.dir(this);
          
      },(err)=>{
        console.log('失败:',err);
      })
    }
  }


  
  

  gosub(){
    this.navCtrl.push('SyrSousuoPage',{id:2});
  }

  gosub1(){
    this.navCtrl.push('SyrEssayPage',{id:3});
  }

  private headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              private http: HttpClient, 
              public toastCtrl: ToastController,
              ) {
  }

  
  

  count:number = 0;
  flag:number = 0;
  tzid1:number = Math.round(Math.random()*10000);

  

  //赞和取消赞
  gosub2(){

   
    var z = document.getElementById('huan');
     
    if(this.count == 0){
      z.style.color = "#259b24"; 
      this.count++;

      this.http.post('/zan/zan', {tzid:this.tzid1,uid:'100'} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
    }else{
      z.style.color = "#a1c45a";
      this.count = 0;

      this.http.post('/zan/del', {tzid:this.tzid1} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
    }
    
  }

  //收藏和取消收藏
  gosub3(){

    var z = document.getElementById('shoucang');
     
    if(this.flag == 0){
      z.style.color = "#259b24"; 
      this.flag++;

      this.http.post('/shoucang/sc', {tzid:this.tzid1,uid:'100'} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
    }else{
      z.style.color = "#a1c45a";
      this.flag = 0;
      
      this.http.post('/shoucang/del', {tzid:this.tzid1} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
    }
    
  }

  

  send(){
    this.navCtrl.push('SyrTieziPage',{id:1});
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyrSqPage');
  }

}
class A {
  constructor(public data:Array<Object>){}
} 
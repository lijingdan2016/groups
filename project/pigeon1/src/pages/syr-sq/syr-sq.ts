import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { SyrTieziPage } from '../syr-tiezi/syr-tiezi';
import { SyrSousuoPage } from '../syr-sousuo/syr-sousuo';
import { SyrEssayPage } from '../syr-essay/syr-essay';


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
  tjitems;
  len;
  count;
  flag:Array<number>; 
  number:number = 0;
  isActive = 1;
  userid:number;
  uid;
  tzid;

  private headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              private http: HttpClient, 
              public toastCtrl: ToastController,
              ) {

      
  }

  fun(){
    this.count = [];
    this.count.length = this.len;
    for(var j = 0;j<this.len;j++){
      this.count[j] = 0;
    }
    
    this.flag = [];
    this.flag.length = this.len;
    for(var j = 0;j<this.len;j++){
      this.flag[j] = 0;
    }
  }

/* shuffle(arr) {
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
} */

  freshen(){

    this.uid = localStorage.getItem('user_id');
   

      this.http.post('/shequ/sqtuijian', {} ,{
        headers : this.headers,
        observe : 'body',
        // params : {name: username.value, psw: password.value},
        responseType : 'json'
      }).subscribe(
        (data:A)=>{
          console.log(data.data);
          this.tjitems = data.data; 
          this.len = this.tjitems.length;
          console.dir(this);

          this.fun();
      })

      this.http.post('/shequ/sq', {uid:this.uid} ,{
        headers : this.headers,
        observe : 'body',
        // params : {name: username.value, psw: password.value},
        responseType : 'json'
      }).subscribe(
        (data:A)=>{
          console.log(data.data);
          this.items = data.data; 
          this.len = this.items.length;
          console.dir(this);

          this.fun();
      })


     
  }

  isClick(i){
    this.isActive = i;
    this.freshen();
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad SyrSqPage');
      this.freshen();
  }
  
  

  gosub(){
    this.navCtrl.push(SyrSousuoPage,{id:2});
  }

  gosub1(idex){
    
    this.tzid = this.items[idex].tiezi_id;
    console.log(this.tzid);
    this.navCtrl.push(SyrEssayPage,{id:3});

   
    localStorage.setItem('index', this.tzid);
  }

  gosub4(idex){

    this.tzid = this.tjitems[idex].tiezi_id;
    console.log(this.tzid);

    this.navCtrl.push(SyrEssayPage,{id:3});
    localStorage.setItem('index', this.tzid);
  }

  
  

  gosub2(idx){
    this.zan(idx);
  }
  gosub3(idx){
    this.shoucang(idx);
  }

  gosub5(ix){
    this.zan(ix);
  }
  gosub6(ix){
    this.shoucang(ix);
  }


  //赞和取消赞
  zan(idx){

    this.uid = localStorage.getItem('user_id');
   //console.log("zan:",this.tjitems[idx].zan);
    console.log(idx);
    

    var t = document.getElementsByClassName('li3-3')[idx];
    console.log(t);
    let z = t.getElementsByClassName('iconfont')as HTMLCollectionOf<HTMLElement>;
    console.log(z);

    
    console.log('count[i]:',this.count[idx]);
     
    if(this.count[idx] == 0){
      z[0].style.color = "#259b24"; 
      this.count[idx]++;

      console.log('点赞成功');

      //var number = 0;
      this.number = this.tjitems[idx].zan + 1;
      //点赞成功计入点赞表
      this.http.post('/zan/zan', {tzid:this.tjitems[idx].tiezi_id,uid:this.uid} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
      //点赞成功帖子的赞数+1
      this.http.post('/zan/zandata', {tz_id:this.tjitems[idx].tiezi_id,num:this.number} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
       
      })

      this.tjitems[idx].zan = this.number;

    }else if(this.count[idx] == 1){
      z[0].style.color = "#a1c45a";
      this.count[idx] = 0;

      this.number = this.tjitems[idx].zan - 1;
      //取消点赞删除点赞表的那一项
      this.http.post('/zan/del', {tzid:this.tjitems[idx].tiezi_id,uid:this.uid} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
      //取消点赞，帖子点赞数-1
      this.http.post('/zan/zandata', {tz_id:this.tjitems[idx].tiezi_id,num:this.number} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
      
      this.tjitems[idx].zan = this.number;
      //this.storage.set('z[0].style.color', '#a1c45a');
      //localStorage.setItem('color','#a1c45a');
      
    }

    console.log('count[i]:',this.count[idx]);

   
  }



  //收藏和取消收藏
  shoucang(idx){

    this.uid = localStorage.getItem('user_id');

    var t = document.getElementsByClassName('nei3')[idx];
    console.log(t);
    var z = t.getElementsByClassName('iconfont')as HTMLCollectionOf<HTMLElement>;
    console.log(z);
    
     
    if(this.flag[idx] == 0){
      z[0].style.color = "#259b24"; 
      this.flag[idx]++;
      //收藏成功计入收藏表
      this.http.post('/shoucang/sc', {tzid:this.tjitems[idx].tiezi_id,uid:this.uid} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
    }else{
      z[0].style.color = "#a1c45a";
      this.flag[idx] = 0;
      //取消收藏,删除那一项
      this.http.post('/shoucang/del', {tzid:this.tjitems[idx].tiezi_id,uid:this.uid} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
    }
    
  }

  

  send(){
    this.navCtrl.push(SyrTieziPage,{id:1});
  } 

  

}
class A {
  constructor(public data:Array<Object>){}
} 
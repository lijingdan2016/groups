import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the SyrEssayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-essay',
  templateUrl: 'syr-essay.html',
})
export class SyrEssayPage {

  items;
  nritems;
  idx;
  userid;
  tzid;

  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient, public toastCtrl: ToastController ) {
  }

  
//加载页面时直接显示帖子的完整内容和评论
  ionViewDidLoad() {

    this.idx = localStorage.getItem('index');
    //console.log('idx:',this.idx);

    //加载帖子的内容
    this.http.post('/shequ/es', {tzid:this.idx} ,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }).subscribe(
      (data:A)=>{
        this.items = data.data;

    })

    //加载评论的内容

    this.http.post('/pinglun/nr', {tzid:this.idx} ,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }).subscribe(
      (data:A)=>{
        console.log(data.data);
        this.nritems = data.data;
        console.log(this.nritems);
        //console.dir(this);
    })

    
    
  }

 

  pinglun(){
    var foot4 = document.getElementsByClassName('footer4')as HTMLCollectionOf<HTMLElement>;
    var foot5 = document.getElementsByClassName('footer5')as HTMLCollectionOf<HTMLElement>;
    var beijing = document.getElementsByClassName('beijing')as HTMLCollectionOf<HTMLElement>;

    var f4 = foot4[0];
    var f5 = foot5[0];
    var bj = beijing[0];

    f4.style.display='block';
    f5.style.display='none';
    bj.style.display = 'block';
  }

  beijing(){
    var foot4 = document.getElementsByClassName('footer4')as HTMLCollectionOf<HTMLElement>;
    var foot5 = document.getElementsByClassName('footer5')as HTMLCollectionOf<HTMLElement>;
    var beijing = document.getElementsByClassName('beijing')as HTMLCollectionOf<HTMLElement>;

    var f4 = foot4[0];
    var f5 = foot5[0];
    var bj = beijing[0];

    f4.style.display='none';
    f5.style.display='block';
    bj.style.display = 'none';
  }

  fasong(content){

      this.userid = localStorage.getItem('user_id');
      this.idx = localStorage.getItem('index');

  
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
  
      var mydate =year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
  
  
      let data = {uid:'100',content:content.value};
  
  
      this.http.post('/pinglun/pl', {tzid:this.idx,uid:this.userid,content:content.value,date:mydate} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data => {
        console.log(data);
      })
  
      if( !data) {
        this.showToast('top','内容不正确！');
        return ;
      } else {
        var foot4 = document.getElementsByClassName('footer4')as HTMLCollectionOf<HTMLElement>;
        var foot5 = document.getElementsByClassName('footer5')as HTMLCollectionOf<HTMLElement>;
        var beijing = document.getElementsByClassName('beijing')as HTMLCollectionOf<HTMLElement>;

        var f4 = foot4[0];
        var f5 = foot5[0];
        var bj = beijing[0];

        f4.style.display='none';
        f5.style.display='block';
        bj.style.display = 'none';
      }

      this.http.post('/pinglun/nr', {tzid:this.idx} ,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(
        (data:A)=>{
          console.log(data.data);
          this.nritems = data.data; 
          console.log(this.nritems);
          //console.dir(this);
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



class A {
  constructor(public data:Array<Object>){}
} 
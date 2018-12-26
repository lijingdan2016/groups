import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  idx;

  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient, ) {
  }

  
//加载页面时直接显示帖子的完整内容和评论
  ionViewDidLoad() {

    this.idx = localStorage.getItem('index');
    console.log('idx:',this.idx);


    this.http.post('/shequ/sq', {} ,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }).subscribe(
      (data:A)=>{
        console.log(data.data);
        this.items = data.data; 
        console.dir(this);
    })

    //this.item = this.items[this.idx];

    //console.log('trueeeee:',this.item);
    
  }

}

class A {
  constructor(public data:Array<Object>){}
} 
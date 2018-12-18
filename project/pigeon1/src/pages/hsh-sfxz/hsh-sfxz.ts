import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Tabs2Page } from '../tabs2/tabs2';
import { HttpClient,HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the HshSfxzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hsh-sfxz',
  templateUrl: 'hsh-sfxz.html',
})
export class HshSfxzPage {
  a;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.a = navParams.data;
  }

  goToHome1(){
    console.log(this.a);
    this.navCtrl.push(TabsPage);
    this.http.post('/login/identity',this.a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }).subscribe(data=>{
      console.log(data);
      
    })
      
    
  }
  goToHome2(){
    this.navCtrl.push(Tabs2Page);
    this.http.post('/login/secondidentity',this.a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }).subscribe(data=>{
      console.log(data);
      
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HshSfxzPage');
  }

}

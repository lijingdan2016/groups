import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Tabs2Page } from '../tabs2/tabs2';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ModalController } from 'ionic-angular';
import { HshstuidPage } from '../hshstuid/hshstuid';
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
  constructor(public modalCtrl: ModalController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.a = navParams.data;
  }

  goToHome1(){
    // console.log(this.a);
    this.navCtrl.push(TabsPage);
    this.http.post('/login/identity',this.a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }).subscribe(data=>{
      // console.log(data);
      
    })
      
    
  }
  goToHome2(){
    let profileModal = this.modalCtrl.create(HshstuidPage, this.a);
    profileModal.present();
    
    // this.navCtrl.push(HshStuidPage);
    this.http.post('/login/secondidentity',this.a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }).subscribe(data=>{
      // console.log(data);
      
    })
  }


  ionViewDidLoad() {
    let modelData: string = '用户名：' + this.navParams.get('name')+'密码：'+ this.navParams.get('password');
    // console.log(modelData);
    // console.log('ionViewDidLoad HshSfxzPage');
  }

}

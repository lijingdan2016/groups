import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { KrfKcbPage } from '../krf-kcb/krf-kcb';
=======
import { LjdCkcjPage } from '../ljd-ckcj/ljd-ckcj';
import { LjdJczyPage } from '../ljd-jczy/ljd-jczy';
import { LjdPsbxPage } from '../ljd-psbx/ljd-psbx';
>>>>>>> 06b59bdba6697339b5c0c2a2b208d9f0a46bfec6

/**
 * Generated class for the SyrHome2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syr-home2',
  templateUrl: 'syr-home2.html',
})
export class SyrHome2Page {

  courses(){
    this.navCtrl.push(KrfKcbPage);
  }
  gosub1(){
    this.navCtrl.push('SyrCoursePage',{id:1});
  }
  gosub2(){
    this.navCtrl.push('SyrExamPage',{id:2});
  }
  gosub3(){
    this.navCtrl.push('SyrRecommendPage',{id:3});
  }
  gosub4(){
    this.navCtrl.push('SyrClassPage',{id:4});
  }
  gosub5(){
    this.navCtrl.push('SyrSousuoPage',{id:5});
  }
  gockcj(){
    this.navCtrl.push(LjdCkcjPage);
  }
  gojczy(){
    this.navCtrl.push(LjdJczyPage);
  }
  gopsbx(){
    this.navCtrl.push(LjdPsbxPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyrHome2Page');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TxlPage} from '../txl/txl'
import { LjhltPage} from '../ljhlt/ljhlt';
import { LjhcjbjPage } from '../ljhcjbj/ljhcjbj';
import { LjhjrbjPage } from '../ljhjrbj/ljhjrbj';
import { LjhtjpyPage } from '../ljhtjpy/ljhtjpy';
/**
 * Generated class for the NamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-name2',
  templateUrl: 'name2.html',
})
export class Name2Page {
  num=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NamePage');
  }
  addTo(num){
    this.num=num;
  }
  gototxl(){
    this.navCtrl.push(TxlPage);
  }
  gotolt(){
     this.navCtrl.push(LjhltPage); 
    
  }
  gotocjbj(){
    this.navCtrl.push(LjhcjbjPage);
  }
  gotojrbj(){
    this.navCtrl.push(LjhjrbjPage);
  }
  gototjpy(){
    this.navCtrl.push(LjhtjpyPage);
  }

}

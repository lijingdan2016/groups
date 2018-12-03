import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KrfLrcjPage } from '../krf-lrcj/krf-lrcj';
import { WjKqPage } from '../wj-kq/wj-kq';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  lrcj(){
    this.navCtrl.push(KrfLrcjPage)
  }
  kq(){
    this.navCtrl.push(WjKqPage);
  }

}

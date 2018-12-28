import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WjMyPage } from '../wj-my/wj-my';
import { NamePage } from '../name/name';
import { SyrSqPage } from '../syr-sq/syr-sq';
import { SyrHome2Page } from '../syr-home2/syr-home2';
import { Name2Page } from '../name2/name2';

/**
 * Generated class for the Tabs2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html',
})
export class Tabs2Page {
  tab1Root = SyrHome2Page;
  tab2Root = SyrSqPage;
  tab3Root = Name2Page;
  tab4Root = WjMyPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Tabs2Page');
  }

}

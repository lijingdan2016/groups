import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyrHomeparPage } from '../syr-homepar/syr-homepar';
import { SyrSqPage } from '../syr-sq/syr-sq';
import { NamePage } from '../name/name';
import { WjMyPage } from '../wj-my/wj-my';

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
  tab1Root = SyrHomeparPage;
  tab2Root = SyrSqPage;
  tab3Root = NamePage;
  tab4Root = WjMyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs2Page');
  }

}

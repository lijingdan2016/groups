import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { IdentityPage } from '../identity/identity';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /* goToIdentity(){
    this.navCtrl.setRoot(IdentityPage);
  } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

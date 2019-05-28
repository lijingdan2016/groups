import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, Platform,ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wj-classdetail',
  templateUrl: 'wj-classdetail.html',
})
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      班级详情
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-end>
          {{item.note}}
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class WjClassdetailPage {
  character;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform, public viewCtrl: ViewController)
  {
    var characters = [
      {
        name: '思思初一六班',
        quote: '有志者事竟成!',
        image: 'assets/imgs/44.jpg',
        items: [
          { title: '班主任', note: '徐徐志' },
          { title: '班级人数', note: '64人' }
          
          // { title: ''', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.navParams.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad WjClassdetailPage');
  }

}

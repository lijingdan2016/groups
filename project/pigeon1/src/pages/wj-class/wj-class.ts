import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the WjClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wj-class',
  templateUrl: 'wj-class.html',
})
export class WjClassPage {
  myclass;
  user_id;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WjClassPage');
    this.user_id=localStorage.getItem('user_id');
    let a={user_id:this.user_id}

    this.http.post('/class/myclass',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      // console.log(data);
      this.myclass=data;
      if(JSON.stringify(data)==='[]'){
        this.http.post('/class/parentclass',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
      ).subscribe(data=>{
        console.log(data);
        this.myclass=data;
      })
        }
    })


  //   this.http.post('/class/parentclass',a,{
  //     headers : this.headers,
  //     observe : 'body',
  //     responseType : 'json'
  //   }
  // ).subscribe(data=>{
  //     console.log(data);
  //     this.myclass=data;
  //   })
  
  }
   
  

}



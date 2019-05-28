import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  user;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get('/backuser/data').subscribe(data=>{
      this.user=data;
      console.log(data);
      console.log(this.user)
    })
  }

}
class user{
  username:string;
  name:string;
  email:string;
  tel:string;
  task:number
}

import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user;
  constructor(public http:HttpClient) { 
    
  }
  ngOnInit() {
    this.http.get('/user/data').subscribe(data=>{
      this.user=data;
      console.log(data);
      console.log(this.user)
    })
    
    
  }
  del(item:Object){
    let a=item;
    this.http.post('/user/del',{a}).subscribe(
      data=>{
          console.log(data);
      })
  }

}
class user{
  user_id:number;
  password:string;
  email:string;
  identity:string;
  stu_id:number
}

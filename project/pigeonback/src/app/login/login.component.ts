import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../common/services/auth.service';
import { HttpClient , HttpHeaders } from'@angular/common/http'
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // public user = { userName: '', password: '' };

  constructor(public http:HttpClient,public router: Router, public activatedRoute: ActivatedRoute, private authService: AuthService) { }
  private headers = new HttpHeaders({'Content-Type':'application/json'});// 请求头
  ngOnInit() {
    this.authService.logout();
  }

  login(username: HTMLInputElement, password: HTMLInputElement) {

   
      
      let a={name:username.value,password:password.value};
      
      this.http.post('/backlogin/search',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
        // console.log(data);
        
        localStorage.setItem('user_id',a.name);//本地存储user_id
        if(JSON.stringify(data) === '[]' || data===null) {
          return ;
          }else{
          this.authService.loggin().subscribe(() => {
            const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/workspace';
            this.router.navigate([redirect]);
          });
        }
      });
      
      }
    // this.authService.loggin().subscribe(() => {
    //   const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/workspace';
    //   this.router.navigate([redirect]);
    // });
  

  forgetPwd() { }
}

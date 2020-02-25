import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  userInfo: Object;
  isLogin: boolean = this.authService.isLogin;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  
//   register(firstName: string, secondName: string, username: string, password: string ){
//     const appKey = 'kid_H1uBvknQL';
//     const appSecret = '7bc7d1ae9ce24ecc97a34af7d9251618'
    
//     const info = {
//       firstName,
//       secondName,
//       username,
//       password
//     }
    
//     const body= JSON.stringify(info)
//     const headers = {
//       method: 'POST',
//       headers: {
//         'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
//         'Content-Type': 'application/json',
//       }
      
//     };
//     console.log(headers, body)
//     console.log(headers.headers.Authorization)

//     this.http.post(`https://baas.kinvey.com/user/kid_H1uBvknQL`,body, headers).subscribe(data=>{
//        console.log(data)
//        this.isLogin = true;
//       //  this.userInfo = data;
//        this.addInfoLocaleStorage(data);
//        console.log(sessionStorage.authtoken)
      
//     })
//   }

  

  
  
//   login(email:string, password:string) {
//     const appKey = 'kid_H1uBvknQL';
//     const appSecret = '7bc7d1ae9ce24ecc97a34af7d9251618';
//     const data = {
//       username: email,
//       password: password
//     }
//     const body = JSON.stringify(data);
 
//     const headers = {
//       method: 'POST',
//       headers: {
//         'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
//         'Content-Type': 'application/json'
//       }
//     };
//     console.log(headers, JSON.stringify(body))
//     console.log(headers.headers.Authorization)
//     return this.http.post(`https://baas.kinvey.com/user/kid_H1uBvknQL/login`,body , headers).subscribe(data=>{
//       this.addInfoLocaleStorage(data);
//       console.log(sessionStorage.authtoken)
//       this.router.navigate([''])
//     });

    
//   }

//   logout(authtoken){
//     const headers = {
//       method: 'POST',
//       headers: {
//         'Authorization': `Kinvey ${authtoken}`,
//       }
//     };
//     this.http.post(`https://baas.kinvey.com/user/kid_H1uBvknQL/_logout`,{}, headers).subscribe(data=>{
//       sessionStorage.clear()
//     // this.router.navigate(['']);
//     console.log(sessionStorage.authtoken)
//     });
    
//   }

//   addInfoLocaleStorage(data) {
//     sessionStorage.setItem('authtoken', data._kmd.authtoken);
//                        sessionStorage.setItem('username', data.username);
//                        sessionStorage.setItem('userId', data._id);
//  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConcertService } from '../concert/concert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  appKey: string = 'kid_H1uBvknQL';
  appSecret: string = '7bc7d1ae9ce24ecc97a34af7d9251618'
  
  constructor(private http: HttpClient, private router: Router, private concertService: ConcertService) { }

  register(firstName: string, secondName: string, username: string, password: string ){
        
    const info = {
      firstName,
      secondName,
      username,
      password
    }
    
    const body= JSON.stringify(info)
    const headers = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`,
        'Content-Type': 'application/json',
      }
      
    };

    this.http.post(`https://baas.kinvey.com/user/kid_H1uBvknQL`,body, headers).subscribe(data=>{
       this.isLogin = true;
       
       this.addInfoLocaleStorage(data);
       this.router.navigate(['/concert/list']);
    })
  }

  

  
  
  login(email:string, password:string) {
    // const appKey = 'kid_H1uBvknQL';
    // const appSecret = '7bc7d1ae9ce24ecc97a34af7d9251618';
    const data = {
      username: email,
      password: password
    }
    const body = JSON.stringify(data);
 
    const headers = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`,
        'Content-Type': 'application/json'
      }
    };
    
      this.http.post(`https://baas.kinvey.com/user/kid_H1uBvknQL/login`,body , headers).subscribe(data=>{
      this.addInfoLocaleStorage(data);
      this.isLogin = true;
      let links = Array.from(document.getElementsByClassName('show-wen-login'));
      links.forEach(e=> console.log(e));
      this.router.navigate(['/concert/list'])
    });

    
  }

  logout(authtoken: string){
    this.isLogin = false;
    this.router.navigate(['']);
    this.concertService.userTicketsList = [];
    const headers = {
      method: 'POST',
      headers: {
        'Authorization': `Kinvey ${authtoken}`,
      }
    };
    this.http.post(`https://baas.kinvey.com/user/kid_H1uBvknQL/_logout`,{}, headers).subscribe(data=>{
      localStorage.clear()
    });
    
    
  }

  addInfoLocaleStorage(data) {
    localStorage.setItem('authtoken', data._kmd.authtoken);
                       localStorage.setItem('username', data.username);
                       localStorage.setItem('userId', data._id);
                       localStorage.setItem('authtoken', data._kmd.authtoken);
                       localStorage.setItem('firstName', data.firstName);
                       localStorage.setItem('lastName', data.secondName)
                       localStorage.setItem('email', data.username)



                       
 }

 
  

}

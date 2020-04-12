import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { ConcertService } from '../concert/concert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  appKey: string = 'kid_S1DTF3XU8';
  appSecret: string = '22057f59dfa64487b994c6bbf88bf8a0';
  collection: string = 'concerts';
  url: string = 'https://baas.kinvey.com/';
  
  constructor(private http: HttpClient, private router: Router) {
    // this.concertService.appKey = this.appKey;
    // this.concertService.appSecret = this.appSecret;
    // this.concertService.collection = this.collection;

   }

   createAuthorization(type: string) {
    return type === 'Basic'
    ? `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`
    : `Kinvey ${localStorage.getItem('authtoken')}`
   }

   makeHeaders(method: string, type: string) {
    const headers = {
        method: method,
        headers: {
            'Authorization': this.createAuthorization(type),
            'content-type': 'application/json'
        }
    }
    // if (method === 'POST' || method === 'PUT') {
    //     headers.body = JSON.stringify(data);
    // }

    return headers;
  }
   
  register(firstName: string, secondName: string, username: string, password: string ){
        
    const info = {
      firstName,
      secondName,
      username,
      password
    }
    
    const body= JSON.stringify(info)
    // const headers = {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`,
    //     'Content-Type': 'application/json',
    //   }
    // };
    const headers =  this.makeHeaders('Post', 'Basic');

    this.http.post(`${this.url}user/${this.appKey}`,body, headers).subscribe(data=>{
       this.isLogin = true;
       
       this.addInfoLocaleStorage(data);
       this.router.navigate(['/concert/list']);
    }, err=>this.errorHandler(err))
  }

  

  
  
  login(email:string, password:string) {
    
    const data = {
      username: email,
      password: password
    }
    const body = JSON.stringify(data);
 
    // const headers = {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`,
    //     'Content-Type': 'application/json'
    //   }
    // };
    const headers =  this.makeHeaders('Post', 'Basic');
    
      this.http.post(`${this.url}user/${this.appKey}/login`,body , headers).subscribe(data=>{
      this.addInfoLocaleStorage(data);
      this.isLogin = true;
      this.router.navigate(['/concert/list'])
    }, err=>this.errorHandler(err));

    
  }

  logout(authtoken: string){
    this.isLogin = false;
    // this.router.navigate(['']);
    // this.concertService.userTicketsList = [];
    // const headers = {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Kinvey ${authtoken}`,
    //   }
    // };
    const headers = this.makeHeaders('Post', 'Kinvey')
    this.http.post(`${this.url}user/${this.appKey}/_logout`,{}, headers).subscribe(data=>{
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

 
  errorHandler(err){
    if (err.status === 401) {
      console.log(err)
      alert('Грешен имейл, или парола!')
    } else if(err.status === 409){
      alert('Вече има такъв потребител!')
    } else {
      this.router.navigate(['**'])
      console.log(err)
     setTimeout(()=>{alert(err.statusText)}, 2000) 
    }
  }

}

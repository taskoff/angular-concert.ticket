import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { RouterLink, Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  list$: Observable<any>;
  concertDetail;
  userTicketsList = [];
  appKey: string ;
  appSecret: string;
  collection: string;
  
  constructor(private http: HttpClient, private router: Router) { }
  
  getConcertList(type: string, username:string, password: string, authtoken?) {
    if (!this.list$) {
      const headers = {
        method: 'GET',
        headers: {
          'Authorization': `${type} ${btoa(`${username}:${password}`)}`,
          'Content-Type': 'application/json'
          }
        };
      if (authtoken) {
        headers.headers.Authorization = `Kinvey ${localStorage.authtoken}`;
      }
      return this.list$ =  this.http.get<any>(`https://baas.kinvey.com/appdata/${this.appKey}/${this.collection}`, headers);
    }
    }
  
  getConcertDetails(id: string) {
       
      const headers = {
      method: 'GET',
      headers: {
        'Authorization': `Kinvey ${localStorage.authtoken}`,
        'Content-Type': 'application/json'
      }
    };

    this.concertDetail = this.http.get(`https://baas.kinvey.com/appdata/${this.appKey}/${this.collection}/${id}`, headers)
  }

  reserveTicket(id: string, count: number, concert) {
    if (count > concert.ticketsCount) {
      alert('Няма толкова билети!');
      return;
    }
    const body = concert
    const userId = localStorage.getItem('userId');
      body.ticketsCount -= count;
      let userExist = false;
      body.users.forEach(e=>{
        if (e.userId === userId) {
          let num = Number(e.ticket) 
          e.ticket = num + Number(count);
          userExist = true;
        }
      })
      if (!userExist) {
        body.users.push({userId, ticket:count})
      }
      
      const headers = {
      method: 'PUT',
      headers: {
        'Authorization': `Kinvey ${localStorage.authtoken}`,
        'Content-Type': 'application/json'
      }
    };

    this.concertDetail = this.http.put(`https://baas.kinvey.com/appdata/${this.appKey}/${this.collection}/${id}`, body, headers)
    .subscribe(d=> {
      this.router.navigate(['/user'])
    })
    this.concertDetail = this.http.put(`https://baas.kinvey.com/appdata/${this.appKey}/concerts/${id}`, body, headers)
    .subscribe(d=> console.log(d))
  }

  checkUserTickets () {

            
      return this.list$.pipe(map(d=>{
        let data = []
        d.forEach(e=>{
          e.users.forEach(u=>{
            if (u.userId === localStorage.userId) {
              data.push({group: e.groupName, city: e.city, date: e.date, tickets: u.ticket}) 
            }
          })
        })
       return data;
        
      }))
      

      
        
  }

  naviAnimation () {
    
  }
}

  



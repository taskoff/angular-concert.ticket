import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';





@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  list$: Observable<any>;
  concertDetail;
  userTicketsList = [];
  appKey: string = this.authService.appKey;
  appSecret: string = this.authService.appSecret;
  url = this.authService.url
  collection: string = this.authService.collection;
  
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}
  
  getConcertList(authtoken?) {
    
      const headers = this.authService.makeHeaders('GET', 'Basic');
      
      if (authtoken) {
        headers.headers.Authorization = `Kinvey ${localStorage.authtoken}`;
      } else {
        headers.headers.Authorization = `Basic ${btoa(`guest:guest`)}`
      }
      return this.list$ =  this.http.get<any>(`${this.url}appdata/${this.appKey}/${this.collection}`, headers);
    
  }
  
  getConcertDetails(id: string) {
       
    const headers = this.authService.makeHeaders('Get', 'Kinvey');
    // console.log(headers)
    this.concertDetail = this.http.get(`${this.url}appdata/${this.appKey}/${this.collection}/${id}`, headers)
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
      
    const headers = this.authService.makeHeaders('PUT', 'Kinvey');
      console.log(body)
    this.concertDetail = this.http.put(`${this.url}appdata/${this.appKey}/${this.collection}/${id}`, body, headers)
    .subscribe(d=> {
      this.router.navigate(['/user'])
    })
   
  }
// 
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

  
}

  



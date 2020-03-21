import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';





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
  
  constructor(private http: HttpClient) { }
  
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
    console.log(this.appKey)
    console.log(localStorage.authtoken)
    console.log(id)
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
    console.log(body)
    console.log(headers)
    this.concertDetail = this.http.put(`https://baas.kinvey.com/appdata/${this.appKey}/concerts/${id}`, body, headers)
    .subscribe(d=> console.log(d))
  }

  checkUserTickets () {

      // this.list$.subscribe(d=>d.forEach(e=>{e.users.forEach(u=> {
      //   if (u.userId === localStorage.userId) {
          
      //     this.userTicketsList.push({group: e.groupName, city: e.city, tickets: u.ticket, date: e.date})
      //     console.log(this.userTicketsList)
      //   }
      // })
        
      // }))
      //  this.list$.subscribe(d=>{
      //   d.forEach(e=>{
      //   let ticketList = e.users.filter(u=>u.userId === localStorage.userId)
      //   if (ticketList.length > 0) {
      //    ticketList.forEach(u=>{
      //      let currentGroup = {group: e.groupName, city: e.city, tickets: u.ticket, date: e.date};
      //      let isGroup = false;
          
      //      this.userTicketsList.forEach(g=>{
      //       if(g.group === currentGroup.group && g.date === currentGroup.date){
      //         g.tickets = currentGroup.tickets;
      //         isGroup = true;
             
      //       } 

      //     });
      //     if (!isGroup) {
      //       this.userTicketsList.push(currentGroup)
      //     }
      //    })
         
      //   } 
      //   })
      //   if (this.userTicketsList.length === 0) {
      //     this.userTicketsList.push({noTickets: 'Няма резервирани билети'})
      //   }
      // })
      
      return this.list$.pipe(map(d=>{
        let data = []
        d.forEach(e=>{
          e.users.forEach(u=>{
            if (u.userId === localStorage.userId) {
              data.push({group: e.groupName, city: e.city, date: e.date, tickets: u.ticket}) 
            }
          })
        })
        console.log(data)
       return data;
        
      }))
      

      
        
  }
}



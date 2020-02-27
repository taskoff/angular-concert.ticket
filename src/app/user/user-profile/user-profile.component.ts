import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/concert/concert.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  ticketList: any;
  email = localStorage.username;
  firstName = localStorage.firstName;
  lastName = localStorage.lastName;
  constructor(private concertService: ConcertService) { 
    this.ticketList = this.concertService.userTicketsList;
    // console.log(this.ticketList)
  }
  
  ngOnInit() {
    // if (this.ticketList.length === 0) {
      this.concertService.checkUserTickets();
    // }
    
    
  }

}

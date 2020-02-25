import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/concert/concert.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  ticketList: any[];
  email = sessionStorage.username;
  firstName = sessionStorage.firstName;
  lastName = sessionStorage.lastName;
  constructor(private concertService: ConcertService) { 
    this.ticketList = this.concertService.userTicketsList
  }

  ngOnInit() {
    if (this.ticketList.length === 0) {
      this.concertService.checkUserTickets();
    }
  }

}

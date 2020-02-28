import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/concert/concert.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css', '../../shared/loader-styles.css']
})
export class UserProfileComponent implements OnInit {
  ticketList: any [] ;
  email = localStorage.username;
  firstName = localStorage.firstName;
  lastName = localStorage.lastName;
  constructor(private concertService: ConcertService) { 
    
   
  }
  
  ngOnInit() {
    this.concertService.checkUserTickets().subscribe(d=> this.ticketList = d)
  }

}

import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../concert.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

concert = this.concertService.concertDetail;

  constructor(private concertService: ConcertService,) {}
    
  ngOnInit() {
    if (this.concertService.concertDetail) {
      this.concertService.concertDetail.subscribe(d=>this.concert = d);
    }
  }

  resTicket(id, count, concert) {
    this.concertService.reserveTicket(id, count, concert)
    // this.concertService.checkUserTickets()
  }
  
}

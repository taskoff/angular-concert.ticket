import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/concert/concert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private concertService: ConcertService) { }

  ngOnInit() {
  }

  getList() {
    this.concertService.getConcertList('Basic', 'guest', 'guest');
  }

}

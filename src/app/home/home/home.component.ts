import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/concert/concert.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin = !!this.authService.isLogin;
  constructor(private concertService: ConcertService, private authService: AuthService) { }
      
  ngOnInit() {
  }

  getList() {
    console.log(this.concertService.list$)
    if (!this.concertService.list$) {
    this.concertService.getConcertList('Basic', 'guest', 'guest');
    }
  }

}

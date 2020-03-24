import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/concert/concert.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin = !!this.authService.isLogin;
  constructor(private concertService: ConcertService, private authService: AuthService) { }
  
  ngOnInit() {
    setTimeout(()=>{
      document.querySelector('.home-page-button').classList.add('loaded');
      document.querySelector('.site-title').classList.add('loaded');
    }, 1000)

  }

  getList() {
    
    if (!this.concertService.list$) {
    this.concertService.getConcertList('Basic', 'guest', 'guest');
    }
  }

}

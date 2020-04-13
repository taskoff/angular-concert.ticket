import { Component, OnInit, ElementRef } from '@angular/core';
import { ConcertService } from 'src/app/concert/concert.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLoggin: boolean = this.authService.isLogin;
  isLoaded: Boolean;
  
  constructor(private authService: AuthService,
    private concertService: ConcertService) {
      
     }

  ngOnInit() {
    setTimeout(()=>{this.isLoaded = true;}, 1000)
  }
 
  logout() {
    this.authService.logout()
  }
 }
// 
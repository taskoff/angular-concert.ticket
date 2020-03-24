import { Component, OnInit, ElementRef } from '@angular/core';
import { ConcertService } from 'src/app/concert/concert.service';
import { AuthService } from 'src/app/auth/auth.service';
import { FormService } from 'src/app/form/form.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLoggin: boolean = this.authService.isLogin;
  
  constructor(private authService: AuthService,
    private concertService: ConcertService) {
      
     }

  ngOnInit() {
    setTimeout(()=>{document.querySelector('.site-navi').classList.add('loaded');}, 1000)
  }
 
  logout() {
    this.authService.logout(localStorage.authtoken)
  }
  getList() {
   
    if(!this.concertService.list$){
      this.concertService.getConcertList('Basic', 'guest', 'guest');
    }
    
  }
}
// 
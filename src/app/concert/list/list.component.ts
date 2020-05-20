import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../concert.service';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/form/form.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css','../../shared/loader-styles.css']
})
export class ListComponent implements OnInit {
  list: any[];
  isLoggin: boolean = !!this.authService.isLogin;

  constructor(private concertService: ConcertService,
              private authService: AuthService,
             ) { 
               this.concertService.getConcertList().subscribe(d=>this.list = d, err=>alert(err));
             }

  ngOnInit() {
  }

  getDetails(id: string) {
    this.concertService.getConcertDetails(id);
  }
}
// 
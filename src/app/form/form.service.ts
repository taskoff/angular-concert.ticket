import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  userInfo: Object;
  isLogin: boolean = this.authService.isLogin;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}
  
  

  
}

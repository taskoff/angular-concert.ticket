import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../form-style.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login(data) {
    this.authService.login(data.email, data.password)
  }
}

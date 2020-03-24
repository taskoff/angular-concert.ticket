import { Component } from '@angular/core';
import {AuthService} from './auth/auth.service'
import { FormService } from './form/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concert-tiket';
  isLogin = this.formService.isLogin;
  constructor(private formService: FormService){

  }

  ngOnInit() {
    // window.addEventListener('load', function(){
    //   this.document.querySelector('body').classList.add('loaded');
    // })
}
}

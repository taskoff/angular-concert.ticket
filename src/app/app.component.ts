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

//   ngOnInit() {
//     document.body.classList.add('bg-img');
// }
}

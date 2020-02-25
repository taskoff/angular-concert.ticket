import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../form-style.css']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  constructor(private authService: AuthService,) {}

  ngOnInit() {
  }

  register(formData) {
    console.log(formData)
    this.authService.register(formData.firstName, formData.secondName,formData.email, formData.password);
  }

  
 

}

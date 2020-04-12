import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  collection = 'testimonials';
  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }
  sendTestimonial(text) {
    const headers = this.authService.makeHeaders('POST', 'Kinvey');
    const body = {
      testimonial: text,
      author: {
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName')
      }
    }
    
    this.http.post(`${this.authService.url}appdata/${this.authService.appKey}/${this.collection}`, body, headers)
    .subscribe(d=> {
     console.log(d)
    })
  }
}

import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  collection = 'testimonials';
  constructor(private authService: AuthService, private http: HttpClient) { }

  sendTestimonial(text) {
    const headers = this.authService.makeHeaders('POST', 'Kinvey');
    const data = {
      testimonial: text,
      author: {
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName')
      }
    }
    const body= JSON.stringify(data);
    
    this.http.post(`${this.authService.url}appdata/${this.authService.appKey}/${this.collection}`, body, headers)
    .subscribe(d=> {
     console.log(d)
    })
  }
  getTestimonialList() {
    const headers = this.authService.makeHeaders('POST', 'Kinvey');
    
    return this.http.get(`${this.authService.url}appdata/${this.authService.appKey}/${this.collection}`, headers)
    // .subscribe(d=> {
    //  console.log(d)
    // })
  }

}

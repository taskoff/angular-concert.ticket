import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  collection = 'testimonials';
  list;
  constructor(private authService: AuthService, private http: HttpClient) { }

  sendComment(text) {
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
     this.getCommentList();
    })
  }
  getCommentList() {
    const headers = this.authService.makeHeaders('POST', 'Kinvey');
    console.log(headers.headers)
    return this.http.get(`${this.authService.url}appdata/${this.authService.appKey}/${this.collection}`, headers)
    
   
  }
  deleteComment(id) {
    const headers = this.authService.makeHeaders('DELETE', 'Kinvey');

    return this.http.delete(`${this.authService.url}appdata/${this.authService.appKey}/${this.collection}/${id}`, headers)
    
  }

}

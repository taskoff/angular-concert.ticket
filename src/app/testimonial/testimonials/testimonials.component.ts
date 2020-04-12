import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../testimonial.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  collection = 'testimonials';
  list$;
  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
   this.list$ = this.testimonialService.getTestimonialList()
  }
  send(text) {
    this.testimonialService.sendTestimonial(text);
  }

  // sendTestimonial(text) {
  //   const headers = this.authService.makeHeaders('POST', 'Kinvey');
  //   const body = {
  //     testimonial: text,
  //     author: {
  //       firstName: localStorage.getItem('firstName'),
  //       lastName: localStorage.getItem('lastName')
  //     }
  //   }
    
  //   this.http.post(`${this.authService.url}appdata/${this.authService.appKey}/${this.collection}`, body, headers)
  //   .subscribe(d=> {
  //    console.log(d)
  //   })
  // }
}

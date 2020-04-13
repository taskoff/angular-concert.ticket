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
  list;
  authorId = localStorage.getItem('userId');
  constructor(private testimonialService: TestimonialService) { 
    this.testimonialService.getCommentList().subscribe(d=> this.list = d);
  }

  ngOnInit() {
   
  }
  send(text) {
    this.testimonialService.sendComment(text);
    this.testimonialService.getCommentList().subscribe(d=> this.list = d);
  }
  deleteCom(id) {
    console.log(id);
    this.testimonialService.deleteComment(id).subscribe(d=>{
      this.testimonialService.getCommentList().subscribe(d=> this.list = d);
    });

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

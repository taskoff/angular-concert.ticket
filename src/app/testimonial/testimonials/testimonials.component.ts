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
  send(textArea) {
    this.testimonialService.sendComment(textArea.value);
    textArea.value = '';
    this.testimonialService.getCommentList().subscribe(d=> this.list = d);
  }
  deleteCom(id) {
      this.testimonialService.deleteComment(id).subscribe(d=>{
      this.testimonialService.getCommentList().subscribe(d=> this.list = d);
    });

  }
// 
  
  
}

import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLoggin: boolean = true;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)';
    // this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)';

  }

}

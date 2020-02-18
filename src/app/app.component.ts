import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concert-tiket';
  
  $scope;getBodyStyle = function () {
    return {background: 'black'};
};

//   ngOnInit() {
//     document.body.classList.add('bg-img');
// }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odd : number[] = [];
  even : number[] = [];

  addGeneratedNumber(num : number) {
    if(num%2==0) {
      this.even.push(num);
    }
    else if (num < 0) {
      this.odd = [];
      this.even = []
    }
    else {
      this.odd.push(num);
    }
  }
}

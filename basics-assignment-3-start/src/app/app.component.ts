import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display:boolean = true;
  logs = [];

  toggleDisplay() {
    this.display = !this.display;
  }

  logEntries() {
    this.logs.push(new Date());
  }

}

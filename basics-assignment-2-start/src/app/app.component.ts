import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: String = 'testUser';

  isUsernameEmpty() {
    return this.username==null || this.username == "" ? true : false;
  }

  resetUsername() {
    this.username = "";
  }
}

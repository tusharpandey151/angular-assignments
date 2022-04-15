import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

}

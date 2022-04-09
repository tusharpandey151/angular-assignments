import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  message:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe(
      (data) =>  {
        this.message = data['message'];
      }
    )
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  
  constructor() { }

  ngOnInit() {
    //this.subscription = interval(2500).subscribe(
    //  (value) => {
    //    console.log(value);
     // }
    //)

    let customObservable = new Observable(observer=>
      {
        let count = 100;
        setInterval(()=> {
          observer.next(count++);
          if(count>111) {
            observer.complete();
          }
          if(count>113) {
            observer.error(new Error('New Error with count > 3'));
          }
        }, 1000);
      });

      customObservable = customObservable.pipe(filter(
        (data) => {
          return data>101;
        }
      ), map(
        (data) => {
          return ('Round ' + (+data+1));
        }
      ))
      this.subscription = customObservable.subscribe((param)=> {
        console.log(param);
      },
      (error)=> {
        console.log(error);
        alert(error.message);
      },
      ()=> {
        console.log('Observable Completed')
      });
      
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

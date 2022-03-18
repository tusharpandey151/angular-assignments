import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output("numberGenerated") numberGenerator = new EventEmitter<number>();
  numb = 0;
  generator;
  constructor() { }

  ngOnInit(): void {
  }

  startGenerator() {
    console.log("start Generator Called");
    console.log(this.numberGenerator);
    /*let that=this;
    this.generator = setInterval(function () {
      that.numberGenerator.emit(that.numb++);
    }, 3000);*/ 
    //If using normal function the inner function's this would not point to object's this,
    // but to window object. so workaround is to save this to that obj, not required when using
    // es6 format with arrow function as done below

    this.generator = setInterval(() => {
      this.numberGenerator.emit(this.numb++);
    }, 3000);
  }


  stopGenerator() {
  if(this.generator!==null) {
    clearInterval(this.generator);
  }
    this.numberGenerator.emit(-1);
  }
 
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayRecipe : boolean = false;

  switchDisplay(event:string) {
    if(event === 'recipe') {
      this.displayRecipe = true;
    }
    else {
      this.displayRecipe = false;
    }
  }
}

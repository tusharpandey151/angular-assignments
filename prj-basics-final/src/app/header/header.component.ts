import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output('navigation') event = new EventEmitter<string>();

  loadList() {
    this.event.emit("list");
  }

  loadRecipe() {
    this.event.emit("recipe");
  }
}

import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') nm:ElementRef;
  @ViewChild('amount') amt:ElementRef;
  @Output('ingredient')  ingredientEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    if(this.nm.nativeElement!=null && this.amt.nativeElement!=null){
      this.ingredientEvent.emit(new Ingredient(this.nm.nativeElement.value, this.amt.nativeElement.value));
    }
  }

}

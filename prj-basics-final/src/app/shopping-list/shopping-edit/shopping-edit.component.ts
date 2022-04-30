import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  subscription: Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Ingredient;
  @ViewChild('f', {static:false}) shoppingListForm : NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index)=> {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          'name':this.editedItem.name,
          'amount':this.editedItem.amount
        })
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addIngredient(form:NgForm) {
    const value = form.value;
    if(this.editMode) {
      this.shoppingListService.updateIngredients(this.editedItemIndex, new Ingredient(value.name, value.amount));
    }
    else {
      this.shoppingListService.addIngredients(new Ingredient(value.name, value.amount));
    }
    this.clear();
  }

  clear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  deleteItem() {
    this.shoppingListService.removeIngredients(this.editedItemIndex);
    this.clear();
  }

}

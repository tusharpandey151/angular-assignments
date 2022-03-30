import { EventEmitter, Injectable } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model'

@Injectable({providedIn:'root'})
export class ShoppingListService {
    
    addIngredientEmitter = new EventEmitter();

    private ingredients: Ingredient [] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.addIngredientEmitter.emit();
      }
}
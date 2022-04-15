import { EventEmitter, Injectable } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model'
import {Subject} from 'rxjs'

@Injectable({providedIn:'root'})
export class ShoppingListService {
    
    addIngredientEmitter = new Subject<Ingredient[]>();

    private ingredients: Ingredient [] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.addIngredientEmitter.next(this.ingredients.slice());
      }
}
import { EventEmitter, Injectable } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model'
import {Subject} from 'rxjs'

@Injectable({providedIn:'root'})
export class ShoppingListService {
    
    addIngredientEmitter = new Subject<Ingredient[]>();
    
    startedEditing = new Subject<number>();

    private ingredients: Ingredient [] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      getIngredient(index : number) {
        return this.ingredients[index];
      }

      addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.addIngredientEmitter.next(this.ingredients.slice());
      }

      updateIngredients(index:number, ingredient:Ingredient) {
        this.ingredients[index] = ingredient;
        this.addIngredientEmitter.next(this.ingredients.slice());
      }

      removeIngredients(index:number) {
        this.ingredients.splice(index, 1);
        this.addIngredientEmitter.next(this.ingredients.slice());
      }
}
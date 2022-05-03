import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({providedIn:"root"})
export class RecipesService {

    recipesEvent = new Subject<Recipe[]>();
    
    recipes: Recipe[] = [];
    //     new Recipe('Chole Masala',
    //      'A Tasty Gravy of Onion with Boiled Chickpeas',
    //      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Choleindia.jpg/800px-Choleindia.jpg',
    //      [
    //         new Ingredient('ChickPeas', 100),
    //         new Ingredient('Onions', 5)
    //     ]),
    //     new Recipe('Paneer Butter Masala',
    //      'A Tasty Gravy of Onion and Butter with Cottage Cheese',
    //      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Paneer_Makhani_India_August_2013.jpg/220px-Paneer_Makhani_India_August_2013.jpg',
    //      [
    //          new Ingredient('Cottage Cheese', 1),
    //          new Ingredient('Onion', 5),
    //          new Ingredient('Butter', 3)
    //     ])
    //   ];

      constructor(private shoppingListService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index:number) {
        return this.recipes[index];
    }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        ingredients.forEach( e=> this.shoppingListService.addIngredients(e));
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesEvent.next(this.recipes.slice())
      }

      updateRecipe(index:number, newRecipe: Recipe) {
        this.recipes[index]=newRecipe;
        this.recipesEvent.next(this.recipes.slice())
      }

      deleteRecipe(id: number) {
        this.recipes.splice(id,1);
        this.recipesEvent.next(this.recipes.slice());
      }

}
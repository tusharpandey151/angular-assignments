import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {

    private recipesItemEvent = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Chole Masala',
         'A Tasty Gravy of Onion with Boiled Chickpeas',
         'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Choleindia.jpg/800px-Choleindia.jpg',
         [
            new Ingredient('ChickPeas', 100),
            new Ingredient('Onions', 5)
        ]),
        new Recipe('Paneer Butter Masala',
         'A Tasty Gravy of Onion and Butter with Cottage Cheese',
         'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Paneer_Makhani_India_August_2013.jpg/220px-Paneer_Makhani_India_August_2013.jpg',
         [
             new Ingredient('Cottage Cheese', 1),
             new Ingredient('Onion', 5),
             new Ingredient('Butter', 3)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      selectRecipiesEmitter(recipe : Recipe) {
          this.recipesItemEvent.emit(recipe);
      }

      getRecipesEmitter() {
          return this.recipesItemEvent;
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        ingredients.forEach( e=> this.shoppingListService.addIngredients(e));
      }
}
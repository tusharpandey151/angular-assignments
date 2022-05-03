import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipesService } from "../recipes/recipes.service";
import {map, tap} from 'rxjs'

@Injectable({providedIn:'root'})
export class DataStorageService {

    constructor(private recipeService:RecipesService, private http:HttpClient ) {

    }

    saveRecipes() {
        this.recipeService.getRecipes();
        this.http.put('https://http-test-e9893-default-rtdb.firebaseio.com/recipes.json', this.recipeService.getRecipes()).subscribe();
    }

    fetchRecipes() {
       return this.http.get<Recipe[]>('https://http-test-e9893-default-rtdb.firebaseio.com/recipes.json').pipe(map((recipes) => {
            return recipes.map((recipe) => {
                return {...recipe, ingredient : recipe.ingredients ? recipe.ingredients : []}
            })
        })).pipe(tap((response) => {

        this.recipeService.recipes = response;
            this.recipeService.recipesEvent.next(response);
        }))
    }
}
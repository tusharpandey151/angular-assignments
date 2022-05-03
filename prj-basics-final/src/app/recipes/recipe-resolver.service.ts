import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";

@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {
    
    constructor ( private recipeService : RecipesService, private dataStorageService: DataStorageService) {

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        if(this.recipeService.recipes.length != 0) {
            return this.recipeService.recipes;
        }
        else {
            return this.dataStorageService.fetchRecipes();
        }
       
    }

}
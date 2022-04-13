import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  constructor(private recipesService: RecipesService, private route:ActivatedRoute) { }

  ngOnInit() {
    let id:number = +this.route.snapshot.params['id'];
    this.recipe = this.recipesService.getRecipes()[id];
    this.route.params.subscribe(
      (params)=> {
        this.recipe = this.recipesService.getRecipes()[+(params['id'])];
      }
    )
  }

  addIngredientsToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}

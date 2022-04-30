import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  recipe:Recipe;
  id : number;
  subscription:Subscription;
  constructor(private recipesService: RecipesService, private route:ActivatedRoute, private router:Router) { }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.recipe = this.recipesService.getRecipes()[this.id];
    this.subscription = this.route.params.subscribe(
      (params)=> {
        this.id = +(params['id']);
        this.recipe = this.recipesService.getRecipes()[+(params['id'])];
      }
    )
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }

  addIngredientsToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}

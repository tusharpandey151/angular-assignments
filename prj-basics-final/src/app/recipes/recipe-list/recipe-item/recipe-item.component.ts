import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe : Recipe;
  @Output('recipeSelected') recipeEvent = new EventEmitter<string> ();

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  recipeSelected() {
    this.recipesService.selectRecipiesEmitter(this.recipe);
  }

}

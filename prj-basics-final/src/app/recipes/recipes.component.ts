import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipesService]
})
export class RecipesComponent implements OnInit {

  recipe:Recipe
  constructor(private recipesService : RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipesEmitter().subscribe(
      (recipe:Recipe) => this.recipe = recipe
    )
  }

}

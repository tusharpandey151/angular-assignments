import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number
  editMode : boolean = false; 
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private router:Router, private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.id = params['id']
        this.editMode = this.id!=null;
        console.log(this.editMode + ' Edit Mode');
        this.initForm();
      }
    )
  }

  onSubmit() {
    const newRecipe = new Recipe(this.recipeForm.value['name'], 
    this.recipeForm.value['description'],
    this.recipeForm.value['imagePath'], 
    this.recipeForm.value['ingredients']);
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    }
    else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.rerouteToPreviousPage();
  }

  onCancel() {
    this.rerouteToPreviousPage();
  }

  rerouteToPreviousPage() {
    this.router.navigate(['../'], {relativeTo:this.route});
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup( {
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  removeIngredient(i:number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }
private initForm() {
  let recipeName = '';
  let imagePathUrl = '';
  let recipeDescription = '';
  let recipeIngredients = new FormArray([]);

  if(this.editMode) {
    const recipe = this.recipeService.getRecipe(this.id);
    recipeName= recipe.name;
    imagePathUrl = recipe.imagePath;
    recipeDescription = recipe.description;
    if(recipe['ingredients']) {
      for (let ingredient of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup( {
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        )
      }
    }
  }
  this.recipeForm = new FormGroup({
    'name': new FormControl(recipeName, Validators.required),
    'imagePath': new FormControl(imagePathUrl, Validators.required),
    'description': new FormControl(recipeDescription, Validators.required),
    'ingredients': recipeIngredients 
  })
}

}

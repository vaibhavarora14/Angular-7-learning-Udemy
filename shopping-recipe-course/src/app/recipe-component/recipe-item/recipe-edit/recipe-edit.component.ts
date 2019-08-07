import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  constructor(private recipeService: RecipeService) { }
  recipeIngredients = new FormArray([]);
  recipe: Recipe;

  ngOnInit() {
    this.initForm();
    this.getIngredients();
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  getIngredients(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  initForm() {
    this.recipe = this.recipeService.getSelectedRecipe();

    this.recipeService.recipeSelected.subscribe(
      (value: Recipe) => {
        this.recipe = value;
        this.setIngredientsFormArray();

        this.recipeForm.setControl('ingredients', this.recipeIngredients);
        this.recipeForm.patchValue({
          name: this.recipe.name,
          imageUrl: this.recipe.imagePath,
          description: this.recipe.description,
        });
      }
    );

    this.setIngredientsFormArray();

    this.recipeForm = new FormGroup({
      name: new FormControl(this.recipe.name),
      imageUrl: new FormControl(this.recipe.imagePath),
      description: new FormControl(this.recipe.description),
      ingredients: this.recipeIngredients,
    });
  }

  setIngredientsFormArray() {
    this.recipeIngredients = new FormArray([]);
    if (this.recipe.ingredients) {
      for (const ingredient of this.recipe.ingredients) {
        this.recipeIngredients.push(new FormGroup({
          ingredientName: new FormControl(ingredient.name),
          ingredientAmount: new FormControl(ingredient.amount)
        }));
      }
    }
  }
}

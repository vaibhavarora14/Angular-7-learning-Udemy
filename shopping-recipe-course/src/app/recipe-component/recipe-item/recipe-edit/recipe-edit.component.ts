import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl, Validators } from '@angular/forms';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }
  recipeIngredients = new FormArray([]);
  recipe: Recipe;
  editMode: boolean;
  id: number;

  ngOnInit() {
    this.initForm();
    this.getIngredients();

    this.route.params.subscribe(
      (params: Params) => {
        this.editMode = params['id'] != null;

        if (this.editMode) {
          this.recipe = this.recipeService.getRecipe(+params['id']);
          this.id = +params['id'];
        }
      }
    );

  }

  onSubmit() {
    const newRecipe = new Recipe(
      (this.recipeForm.value['name'] as string).toLowerCase(),
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'],
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
  }

  getIngredients(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  initForm() {
    if (this.editMode) {
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
        name: new FormControl(this.recipe.name, Validators.required),
        imageUrl: new FormControl(this.recipe.imagePath, Validators.required),
        description: new FormControl(this.recipe.description, Validators.required),
        ingredients: this.recipeIngredients,
      });

    } else {
      this.setIngredientsFormArray();
      this.recipeForm = new FormGroup({
        name: new FormControl(null, Validators.required),
        imageUrl: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        ingredients: this.recipeIngredients,
      });
    }
  }

  setIngredientsFormArray() {
    this.recipeIngredients = new FormArray([]);

    if (this.editMode) {
      if (this.recipe.ingredients) {
        for (const ingredient of this.recipe.ingredients) {
          this.recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    } else {
      this.recipeIngredients.push(new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      }));
    }
  }

    onAddIngredients() {
      (this.recipeForm.get('ingredients') as FormArray).push(
        new FormGroup({
          name: new FormControl('', Validators.required),
          amount: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        })
      );
    }
  }

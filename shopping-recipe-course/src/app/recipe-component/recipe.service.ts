import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
    recipeSelected = new Subject<Recipe>();
    recipeSelectedStorage: Recipe;
    recipeEditMode = false;
    recipdeEditModeChanges = new Subject<boolean>();

    recipes: Recipe[] = [
        new Recipe(
            'fries',
            'French fries',
            'Potato fries 😊',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3fuQL9mTOM2-wboaG-I0_TPuWciCFzlfN4AnudNyOFVawBEk',
            [
                new Ingredient('potato', 3),
                new Ingredient('salt', 0.5),
            ]),
        new Recipe(
            'rice',
            'Rice',
            'Indian rice',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCP2arFOSucfKFmPYNIADFYIwcxujes9W9Ij-prRKksIwiUbCSg',
            [
                new Ingredient('rice', 3),
            ]),
    ];

    recipesChanged = new Subject<Recipe[]>();

    constructor(private shoppingService: ShoppingListService) {}

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getSelectedRecipe(): Recipe {
        return this.recipeSelectedStorage;
    }

    getRecipe(id: number) {
      return this.getRecipes()[id];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }

    setSelectedRecipe(recipe: Recipe): void {
      this.recipeSelectedStorage = recipe;
      this.recipeSelected.next(recipe);
    }

    toggleRecipeEditMode() {
      if (this.recipeSelectedStorage) {
        this.recipeEditMode = !this.recipeEditMode;
        this.recipdeEditModeChanges.next(this.recipeEditMode);
      }
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.getRecipes());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.getRecipes());
    }

    deleteRecipe(index: number) {
      debugger;
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.getRecipes());
    }
}

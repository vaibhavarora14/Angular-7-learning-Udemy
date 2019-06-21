import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipeSelectedStorage: Recipe;

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
                new Ingredient('salt', 0.5),
            ]),
    ];

    constructor(private shoppingService: ShoppingListService) {}

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getSelectedRecipe(): Recipe {
        return this.recipeSelectedStorage;
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }
}

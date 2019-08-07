import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Onion', 5),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
      return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ingredients);
        // this.ingredientsChanged.emit(this.getIngredients());
    }

    updateIngredients(index: number, ingredient: Ingredient) {
      this.ingredients[index] = ingredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}

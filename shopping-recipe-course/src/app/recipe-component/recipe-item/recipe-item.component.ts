import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }
}

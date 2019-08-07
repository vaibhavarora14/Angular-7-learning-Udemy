import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.scss'],
  providers: [RecipeService],
})
export class RecipeComponentComponent implements OnInit {
  recipe: Recipe;
  recipeEditMode: boolean;

  constructor(private recipeService: RecipeService) {
    this.recipeEditMode = recipeService.recipeEditMode;
    recipeService.recipdeEditModeChanges.subscribe(
      (value: boolean) => this.recipeEditMode = value
    );
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
      }
    );
  }
}

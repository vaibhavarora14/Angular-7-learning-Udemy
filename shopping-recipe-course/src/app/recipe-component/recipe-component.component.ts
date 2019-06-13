import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.scss']
})
export class RecipeComponentComponent {
  onRecipeSelected(serverData: Recipe) {
    console.log(serverData.identifier);
  }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  // recipes: Recipe[] = [
  //   new Recipe('fries', 'French fries', 'Potato fries 😊',
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3fuQL9mTOM2-wboaG-I0_TPuWciCFzlfN4AnudNyOFVawBEk'),
  //   new Recipe('rice', 'Rice', 'Indian rice',
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCP2arFOSucfKFmPYNIADFYIwcxujes9W9Ij-prRKksIwiUbCSg'),
  // ];

  // // showRecipeDetails => (string: imagePath) {
  // //   console.log(imagePath);
  // // };

  showRecipeDetails(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}

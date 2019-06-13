import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('fries', 'French fries', 'Potato fries 😊',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3fuQL9mTOM2-wboaG-I0_TPuWciCFzlfN4AnudNyOFVawBEk'),
    new Recipe('rice', 'Rice', 'Indian rice',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCP2arFOSucfKFmPYNIADFYIwcxujes9W9Ij-prRKksIwiUbCSg'),
  ];

  // showRecipeDetails => (string: imagePath) {
  //   console.log(imagePath);
  // };

  showRecipeDetails(recipe: Recipe) {
    this.recipe.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}

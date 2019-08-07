import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRouteSnapshot, RouterEvent, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.route.params.subscribe(
      (data: Params) => {
        debugger;
        this.recipe = this.recipeService.getRecipe(+data['id']);
      }
    );

    console.log(this.route.snapshot.queryParams['id']);
  }

  addIngredientToSL() {
    // this.shoppingService.addIngredients(this.recipe.ingredients);
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  editRecipe() {
    this.recipeService.toggleRecipeEditMode();
  }
}

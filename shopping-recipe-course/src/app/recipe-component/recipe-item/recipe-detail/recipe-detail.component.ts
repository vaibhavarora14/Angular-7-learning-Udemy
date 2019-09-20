import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRouteSnapshot, RouterEvent, ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data: Params) => {
        this.recipeId = +data['id'];
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
    // this.recipeService.toggleRecipeEditMode();
  }

  OnEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  OnDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }
}

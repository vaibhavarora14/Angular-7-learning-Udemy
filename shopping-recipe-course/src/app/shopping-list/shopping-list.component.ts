import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shoppingService: ShoppingListService) { }

    ngOnInit(): void {
        this.ingredients = this.shoppingService.getIngredients();
        this.shoppingService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }

    onEditItem(index: number) {
      this.shoppingService.startedEditing.next(index);
    }
}


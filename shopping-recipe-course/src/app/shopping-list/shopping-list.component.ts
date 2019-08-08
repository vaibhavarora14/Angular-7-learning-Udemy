import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private subscription: Subscription;

    constructor(private shoppingService: ShoppingListService) { }

    ngOnInit(): void {
        this.ingredients = this.shoppingService.getIngredients();
        this.subscription = this.shoppingService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }

    onEditItem(index: number) {
      this.shoppingService.startedEditing.next(index);
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}


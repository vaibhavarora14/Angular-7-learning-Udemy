import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm, Form } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subcription: Subscription;

  nameValue: string;
  amountValue: number;

  editedItemIndex: number;
  editMode: boolean;
  editedItem: Ingredient;

  @ViewChild('f', {static: false}) slForm: NgForm;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.subcription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  addIngredient(): void {
    if (this.slForm.valid) {
      const ingredient = new Ingredient(this.slForm.value.name, this.slForm.value.amount);
      if (this.editMode) {
        this.shoppingService.updateIngredients(this.editedItemIndex, ingredient);
      } else {
        this.shoppingService.addIngredient(ingredient);
      }
      this.clearForm();
    }
  }

  clearForm(): void {
    this.slForm.reset();
    this.editMode = false;
  }

  deleteIngredient(): void {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.clearForm();
  }
}

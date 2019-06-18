import { Component, ViewChild, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { stringify } from 'querystring';
import { empty } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
  nameValue: string;
  amountValue: number;
  @Output() ingredient = new EventEmitter<Ingredient>();

  addIngredient(): void {
    const ingredient = new Ingredient(this.nameValue, this.amountValue);
    this.ingredient.emit(ingredient);
    this.clearForm();
  }

  clearForm(): void {
    this.nameValue = this.amountValue = undefined;
  }
}

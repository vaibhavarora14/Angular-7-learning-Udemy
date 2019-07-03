import { Component, ViewChild, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { stringify } from 'querystring';
import { empty } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {

  nameValue: string;
  amountValue: number;

  constructor(private shoppingService: ShoppingListService) {}

  addIngredient(form: NgForm): void {
    if (form.valid) {
      const ingredient = new Ingredient(form.value.name, form.value.amount);
      this.shoppingService.addIngredient(ingredient);
      this.clearForm(form);
    }
  }

  clearForm(form: NgForm): void {
    form.reset();
  }
}

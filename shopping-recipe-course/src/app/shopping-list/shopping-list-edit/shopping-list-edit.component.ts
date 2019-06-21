import { Component, ViewChild, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { stringify } from 'querystring';
import { empty } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  nameValue: string;
  amountValue: number;
  addButtonState: boolean;
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  @ViewChild('addButton', { static: true }) addButtonRef: ElementRef;

  constructor(private shoppingService: ShoppingListService) {
    // this.validateForm();
  }

  ngOnInit(): void {
    this.validateForm();
  }

  addIngredient(): void {
    if (this.nameInputRef.nativeElement.value && this.amountInputRef.nativeElement.value) {
      const ingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
      this.shoppingService.addIngredient(ingredient);
      this.clearForm();
    }
    // const ingredient = new Ingredient(this.nameValue, this.amountValue);
    // this.ingredient.emit(ingredient);
    // this.clearForm();
  }

  validateForm() {
    if (this.nameInputRef.nativeElement.value && this.amountInputRef.nativeElement.value) {
      // this.addButtonRef.nativeElement.disabled = false;
      this.addButtonState = false;
    } else {
      // this.addButtonRef.nativeElement.disabled = true;
      this.addButtonState = true;
    }
  }

  clearForm(): void {
    this.nameInputRef.nativeElement.value = this.amountInputRef.nativeElement.value = undefined;
  }
}

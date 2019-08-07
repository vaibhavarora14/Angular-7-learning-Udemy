import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'shopping-recipe-course';
  // page: string;

  // constructor() {
  //   this.page = 'recipe';
  // }

  // navigate(page: string) {
  //   this.page = page;
  // }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeComponentComponent } from './recipe-component/recipe-component.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-component/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-component/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-component/recipe-item/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';

import { DropdownDirective } from '../app/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponentComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

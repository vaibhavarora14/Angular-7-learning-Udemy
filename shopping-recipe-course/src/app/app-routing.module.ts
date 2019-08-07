import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe-component/recipe-list/recipe-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponentComponent } from './recipe-component/recipe-component.component';
import { RecipeStartComponent } from './recipe-component/recipe-item/recipe-detail/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-component/recipe-item/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-component/recipe-item/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'recipes', component: RecipeComponentComponent, children: [
    {path: 'edit', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
    {path: '', component: RecipeStartComponent, pathMatch: 'full'},
  ]},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule {

}

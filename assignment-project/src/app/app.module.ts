import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindTestComponent } from './data-bind-test/data-bind-test.component';
import { NgForTestComponent } from './ng-for-test/ng-for-test.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindTestComponent,
    NgForTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

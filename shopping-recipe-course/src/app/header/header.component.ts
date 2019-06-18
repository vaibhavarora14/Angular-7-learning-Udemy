import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @Output() navigatedPage = new EventEmitter<string>();
  selectedPage: string;

  constructor() {
    this.selectedPage = 'recipe';
  }

  navigate(page: string) {
    this.selectedPage = page;
    this.navigatedPage.emit(page);
  }
}


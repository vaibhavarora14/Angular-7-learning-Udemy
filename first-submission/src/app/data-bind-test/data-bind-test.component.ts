import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind-test',
  templateUrl: './data-bind-test.component.html',
  styleUrls: ['./data-bind-test.component.scss']
})
export class DataBindTestComponent implements OnInit {
  username = 'abc';

  constructor() { }

  ngOnInit() {
  }

  checkUsernameValidity() {
    if (this.username && this.username.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  emptyUsername() {
    this.username = '';
  }

}

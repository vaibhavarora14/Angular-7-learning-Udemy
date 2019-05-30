import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-test',
  templateUrl: './ng-for-test.component.html',
  styleUrls: ['./ng-for-test.component.scss']
})
export class NgForTestComponent implements OnInit {
  buttonClicked = true;
  totalClicks = [];

  constructor() { }

  ngOnInit() {
  }

  displayDetails() {
    this.buttonClicked = !this.buttonClicked;
    this.totalClicks.push(new Date().valueOf());
  }

}

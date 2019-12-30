import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http-example';
  httpForm: FormGroup;

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit() {
    this.httpForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    });
  }

  onSubmit() {
    this.httpClient.post('https://ng-complete-guide-3da72.firebaseio.com/', {
      title: this.httpForm.get('title').value,
      content: this.httpForm.get('content').value,
    }).subscribe(responseData => {
      console.log(responseData);
    });
  }
}

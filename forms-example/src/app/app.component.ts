import { Component, ElementRef, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  defaultQuestion = 'pet';
  genders = ['male', 'female'];
  @ViewChild('f') signupForm: NgForm;

  @ViewChild('secondForm') secondForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];

  subscriptionData: {email: string, subscription: string, password: string};

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
        email: '',
      },
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.secondForm.form.patchValue({
        subscription: 'Advanced',
      });
    });
  }

  onDummy() {
    this.secondForm.form.patchValue({
      subscription: 'Advanced',
    });
  }

  onSubmit(form: NgForm) {
    this.subscriptionData = {
      email: form.value.emailSecond,
      subscription: form.value.subscription,
      password: form.value.password
    };
  }
}

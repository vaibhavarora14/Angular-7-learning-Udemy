import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArrayName, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null),
        email: new FormControl(null),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  submitDetails() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }
}

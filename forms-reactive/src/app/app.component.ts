import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArrayName, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  namesNotAllowed = ['Vaibhav', 'Maninder'];
  emailsNotAllowed = ['vaibhav@test.com', 'maninder@test.com'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)] ),
        email: new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails.bind(this)]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    this.signupForm.get('userData.username').statusChanges.subscribe(
      (value) => console.log(value)
    );
  }

  submitDetails() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.namesNotAllowed.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl):
    Promise<{[s: string]: boolean}> |
    Observable<{[s: string]: boolean}> {
      const promise = new Promise<{[s: string]: boolean}>((resolve, reject) => {
        setTimeout(() => {
          if (this.emailsNotAllowed.indexOf(control.value) !== -1) {
            resolve({emailIsForbidden: true});
          } else {
            resolve(null);
          }
        }, 1500);
      });

      return promise;
    }

    getHobbies() {
      const hobbies =  this.signupForm.get('hobbies') as FormArray;
      return hobbies.controls;
    }
}

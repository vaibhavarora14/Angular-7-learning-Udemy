import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forms-reactive-assignment';
  statuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;
  forbiddenName = 'Test';

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.checkForbiddenName.bind(this)]),
      nameAsync: new FormControl(null, [Validators.required], this.checkForbiddenNameAsync.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('Stable'),
    });
  }

  checkForbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenName === control.value) {
      return { forbidden: true };
    }
    return null;
  }

  checkForbiddenNameAsync(control: FormControl): Promise<{ [s: string]: boolean }> {
    const promise = new Promise<{ [s: string]: boolean }>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.checkForbiddenName(control));
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

}

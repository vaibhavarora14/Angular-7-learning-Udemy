import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const source = interval(1000);

    // this.firstObSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 5) {
          observer.complete();
        }
        // error won't post because, observer gets completed early
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObSubscription = customObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('completed');
    });
  }

  ngOnDestroy(): void {
    this.firstObSubscription.unsubscribe();
  }

}

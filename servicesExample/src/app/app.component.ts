import { Component } from '@angular/core';
import { UsersService } from './services/users-service';
import { CounterService } from './services/counter-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService, CounterService],
})
export class AppComponent {
  title = 'servicesExample';
}

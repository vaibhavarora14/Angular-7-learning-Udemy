import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users-service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  switchState(id: number, state: string) {
    this.usersService.switchState(id, state);
  }

}

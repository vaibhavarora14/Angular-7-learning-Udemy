import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users-service';
import { User } from '../models/user.model';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: []
})

export class ActiveUsersComponent implements OnInit {
    users: User[];

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.users = this.usersService.activeUsers;
    }

    switchState(id: number, state: string) {
        this.usersService.switchState(id, state);
    }
}

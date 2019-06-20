import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { CounterService } from './counter-service';

@Injectable()

export class UsersService {
    activeUsers: User[] = [
        new User(1, 'Max'),
        new User(2, 'Anna'),
    ];
    inactiveUsers: User[] = [
        new User(3, 'Chris'),
        new User(4, 'Manu'),
    ];

    constructor(private counterService: CounterService) {}

    switchState(id: number, state: string) {
        if (state === 'active') {
            this.activeUsers.some((user: User, index: number, array: User[]) => {
                if (user.id === id) {
                    array.splice(index, 1);
                    this.counterService.logActiveUsersActivity('removed');
                    this.inactiveUsers.push(user);
                    this.counterService.logInactiveUsersActivity('added');
                    return true;
                }
            });
        } else if (state === 'inactive') {
            this.inactiveUsers.some((user: User, index: number, array: User[]) => {
                if (user.id === id) {
                    array.splice(index, 1);
                    this.counterService.logInactiveUsersActivity('remove');
                    this.activeUsers.push(user);
                    this.counterService.logActiveUsersActivity('added');
                    return true;
                }
            });
        }
    }
}

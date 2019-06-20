export class CounterService {
    logActiveUsersActivity(status: string) {
        console.log('1 active user from list is ' + status);
    }

    logInactiveUsersActivity(status: string) {
        console.log('1 inactive user from list is ' + status);
    }
}

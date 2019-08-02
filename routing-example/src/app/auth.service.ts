export class AuthService {
  loggedIn = false;

  isAuthenticated(): Promise<WindowTimers> {
    const promise = new Promise(
      (resolve, reject) => {
        window.setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}

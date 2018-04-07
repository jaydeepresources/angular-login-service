import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public loginStatus: number;

  constructor() {
    this.loginStatus = -1;
  }

  public login(email: string, password: string) {
    this.loginStatus = (email == 'admin' && password == 'admin') ? 1 : 0;
  }

  public logout(){
    this.loginStatus = -1;
  }

}

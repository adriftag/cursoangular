import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  isLoggedIn: boolean;
  loginSubject: Subject<boolean> = new Subject<boolean>(); //servira para desconectar tambien
  mockUser = { userName: 'adrian.ayala', passwd: 'gomez' };
  constructor() { }

  login(username: string, passwd: string): Observable<boolean> {
    return of(username == this.mockUser.userName && passwd == this.mockUser.passwd).pipe(
      delay(2000),
      tap(val => {
        this.isLoggedIn = val;
        this.loginSubject.next(this.isLoggedIn);
      })
    )
  }
  updateLogin(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loginSubject.next(this.isLoggedIn);
  }
}

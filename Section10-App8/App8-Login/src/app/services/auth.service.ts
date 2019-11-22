import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endPoint = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyAvbp7iczZgZLLZbuWlO5ymJm5dNZJg3MU';

  idToken: string;

  // Create new user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login user
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private httpClient: HttpClient) { 
    this.getToken();
  }

  logout() {
    localStorage.removeItem('idToken');
  }

  login(user: User) {

    const bodyPayload = {
      ...user,
      returnSecureToken: true
    };
    return this.httpClient.post(
      `${this.endPoint}signInWithPassword?key=${this.apiKey}`,
      bodyPayload
    ).pipe (
      map( resp => {
        this.saveToken(resp['idToken']);
        return resp;
      })
    );
  }

  signUp(user: User) {

    const bodyPayload = {
      ...user,
      returnSecureToken: true
    };
    return this.httpClient.post(
      `${this.endPoint}signUp?key=${this.apiKey}`,
      bodyPayload
    ).pipe (
      map( resp => {
        this.saveToken(resp['idToken']);
        return resp;
      })
    );
  }

  private saveToken(idToken: string) {

    this.idToken = idToken;
    localStorage.setItem('idToken', idToken);

    const today1 = new Date();
    today1.setSeconds(3600);
    localStorage.setItem('expire', today1.getTime().toString());
  }

  private getToken() {
    if (localStorage.getItem('idToken')) {
      this.idToken = localStorage.getItem('idToken');
    } else {
      this.idToken = '';
    }
    return this.idToken;
  }

  isAuthenticated(): boolean {
    if (this.idToken.length < 2) {
      return false;
    }
    const expire = Number(localStorage.getItem('expire'));
    const expireDate = new Date();
    expireDate.setTime(expire);

    if (expireDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}

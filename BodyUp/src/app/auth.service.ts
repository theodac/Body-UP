import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAuthorizationToken() {
    return localStorage.getItem('token');

  }
  constructor() { }
}

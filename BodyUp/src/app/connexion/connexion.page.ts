import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthInterceptor} from '../http-interceptor/auth-interceptor';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  public users: Array<any>;
  public register: FormGroup;
  constructor(private user: UserService, private formBuilder: FormBuilder , private interceptor: AuthInterceptor) {
    this.register = this.formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required]



  });

  }

  ngOnInit() {

   console.log( this.getDecodedAccessToken(localStorage.getItem('token')));

  }
  onSubmit(){
    console.log(this.register.value);
    this.user.connexion(this.register.value);

  }
  getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }


}

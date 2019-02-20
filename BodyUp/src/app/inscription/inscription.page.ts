import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Md5} from "md5-typescript";
import {FormBuilder, FormControl, Validators, FormGroup, ReactiveFormsModule} from "@angular/forms";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
    public users : any = {};

    public register: FormGroup;

    constructor(private formBuilder: FormBuilder, private user : UserService) {
        this.register = this.formBuilder.group({
            name: [null, Validators.required],
            firstname: [null, Validators.required],

            mail: [null, Validators.required],
            password: [null, Validators.required]

        });



    }
    ngOnInit() {
        console.log( this.getDecodedAccessToken(localStorage.getItem('token')));
    }

    // convenience getter for easy access to form fields
    get f() { return this.register.controls; }

  onSubmit(){
   console.log(this.register.value);
    this.user.createCustomer(this.register.value);
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

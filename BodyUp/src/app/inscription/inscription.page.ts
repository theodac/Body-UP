import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Md5} from "md5-typescript";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
 public users : any = {};

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  onSubmit(){

   this.users.password =  Md5.init(this.users.password);
    this.user.createCustomer(this.users);
  }



}

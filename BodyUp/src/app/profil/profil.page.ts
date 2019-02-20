import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  public  users:  Array<object> = [];
  constructor(private  user:  UserService) { }
  ngOnInit() {
    this.getCustomers();
  }
  public  getCustomers() {
    this.user.getCustomers().subscribe((data:  Array<object>) => {
      this.users  =  data['hydra:member'];
      console.log(data['hydra:member']);
    });
  }

}




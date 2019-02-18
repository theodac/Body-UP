import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public users : Array<any>;

  constructor(private user: UserService) { }

  ngOnInit() {

    var className = ApiService.getClassName(UsersPage);
    this.user.getCustomers(className).subscribe(data => {
      console.log(data['hydra:member']);
      this.users = data['hydra:member'];
      console.log(performance.now());


    },);

  }

}

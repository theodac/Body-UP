import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {
    var user ={
      "name": "Nathan",
      "firstname": "Hego",
      "mail": "string@mail.fr",
      "password": "123456"
    };


  }

}

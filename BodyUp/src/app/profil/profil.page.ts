import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  public users: any;

  constructor(private user : UserService) { }

  ngOnInit() {
   const token =  this.user.getDecodedAccessToken(localStorage.getItem('token'));
    this.user.getCustomerById(token.id).subscribe(data => {
     console.log(data);
      this.users = data;
    });

  }

}




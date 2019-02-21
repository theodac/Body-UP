import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  public users: any;
    public poids: number;
    public taille: number;
    public imc: number;
    public statut : string;

  constructor(private user : UserService) { }

  ngOnInit() {
   const token =  this.user.getDecodedAccessToken(localStorage.getItem('token'));
   this.users = token;
   console.log(token);
   this.poids = token.weight;
   this.taille = token.size;
   this.calculerImc();

  }
    calculerImc() {

        this.imc = this.poids / Math.pow(this.taille, 2);
        this.imc = Math.round(this.imc*100)/100;



        if (this.imc < 18.5) {
            this.statut = 'Maigreur';
        }
        if (this.imc > 18.5 && this.imc <= 25 ) {
            this.statut = 'Corpulence normale';
        }
        if (this.imc > 25 && this.imc <= 30) {

            this.statut = 'Surpoids';

        }
        if (this.imc > 30 && this.imc <= 35) {

            this.statut = 'Obésité modérée';
        }

        return this.imc;

    }

}




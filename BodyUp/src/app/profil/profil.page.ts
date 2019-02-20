import { Component, OnInit } from '@angular/core';
import {setHostBindings} from "@angular/core/src/render3/instructions";

@Component({
    selector: 'app-profil',
    templateUrl: './profil.page.html',
    styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

    public poids: number;
    public taille: number;
    public imc: number;
    public statut : string;


    constructor() { }

    ngOnInit() {
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
        return this.statut;

    }
}




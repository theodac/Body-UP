import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from "./users";
import {Observable} from "rxjs";
import * as jwt_decode from "jwt-decode";
import {AlertController, NavController, ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://localhost:8000/api';
  response: Observable<any>;

  constructor(private httpClient: HttpClient , private navController: NavController,private alertController: AlertController, private toastController: ToastController) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Connexion reussi ',
      duration: 4000,
      color: "success"
    });
    toast.present();
  }
  async registerSuccess() {
    const toast = await this.toastController.create({
      message: 'Inscription reussi ',
      duration: 4000,
      color: "success"
    });
    toast.present();
  }
  async connexionDenied() {
    const toast = await this.toastController.create({
      message: 'Probleme lors de la connexion , informations invalides ',
      duration: 4000
    });
    toast.present();
  }
  public createCustomer(content){
    return this.httpClient.post(`${this.apiURL}/users`,content,{observe:'response'}).subscribe(data => {
      console.log(data.status);
          if(data.status == 201){
            this.registerSuccess().then(()=>{
              setTimeout( ()=> {
                this.navController.navigateForward("connexion");
              },3000)
            });
          }
    },
        err => {
        console.log(err);
        });

  }
  public connexion(content){
    return this.httpClient.post(`${this.apiURL}/login`,content,{observe: 'response'}).subscribe(data => {
          console.log(data.status);
          if(data.status == 200){
            this.presentToast().then(()=>{
              setTimeout( ()=> {
                this.navController.navigateForward("accueil");
              },3000)
            });

          }



        },
        err => {
          console.log(err);
          if (err.status == 401){
            this.connexionDenied();
          }
        });

  }
  public getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }

  public updateCustomer(customer: Users){}

  public deleteCustomer(id: number){}

  public getCustomerById(id: number){
    return this.httpClient.get<Users[]>(`${this.apiURL}/users/`+id);
  }

  public getCustomers(url?: string){
    return this.httpClient.get<Users[]>(`${this.apiURL}/`+url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from "./users";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://localhost:8000/api';
  response: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  public createCustomer(content) {
    return this.httpClient.post(`${this.apiURL}/users`,content).subscribe(data => {
      console.log(data);

    },
        err => {
        console.log(err);
        });

  }
  public connexion(content){
    return this.httpClient.post(`${this.apiURL}/login`,content,{observe: 'response'}).subscribe(data => {
          console.log(data);


        },
        err => {
          console.log(err);
        });

  }


  public updateCustomer(customer: Users) {}

  public deleteCustomer(id: number) {}

  public getCustomerById(id: number) {}



  public getCustomers(url?: string) {
    return this.httpClient.get<Users[]>(`${this.apiURL}/` + url);
  }
}

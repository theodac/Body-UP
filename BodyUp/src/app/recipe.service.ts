import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "./users";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiURL: string = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {

  }
  public getRecipe(){
    return this.httpClient.get(`${this.apiURL}/recipes`);
  }
}

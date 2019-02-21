import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.page.html',
  styleUrls: ['./list-recipe.page.scss'],
})
export class ListRecipePage implements OnInit {
  public users : any;

  constructor(private recipe: RecipeService) { }

  ngOnInit() {
    this.recipe.getRecipe().subscribe(data => {
      console.log(data);
      this.users = data;
      console.log(this.users);
    })
  }
}

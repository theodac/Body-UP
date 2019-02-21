import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
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

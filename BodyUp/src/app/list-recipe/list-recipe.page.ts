import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.page.html',
  styleUrls: ['./list-recipe.page.scss'],
})
export class ListRecipePage implements OnInit {
  public users : any;

  constructor(private recipe: RecipeService,private navController: NavController) { }

  ngOnInit() {
    this.recipe.getRecipe().subscribe(data => {
      console.log(data);
      this.users = data;
      console.log(this.users);
    })
  }
  link(id : Object){
    this.navController.navigateForward("recipe/"+id);

  }
}

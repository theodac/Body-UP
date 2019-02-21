import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  public users : any;
  public id : string;

  constructor(private recipe: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(localStorage.getItem('token'));
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      console.log(this.id);
      this.recipe.getRecipeById(this.id).subscribe(data => {
        console.log(data);
        this.users = data;
        //console.log(this.users);
      })
    });

  }

}

import { Component, OnInit } from '@angular/core';

import { RecipesService } from './shared/services/recipes.service';
import { Recipe } from './shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipesService ]
})
export class RecipesComponent implements OnInit {

  public selectedRecipe: Recipe;

  constructor(private recipesSerive: RecipesService) { }

  ngOnInit() {
    this.recipesSerive.recipeSelected.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    );
  }

}

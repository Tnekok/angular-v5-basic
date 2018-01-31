import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from '../shared/services/recipes.service';
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[];

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe() {
    // we're using a relative route.
    // Since we're already in /recipes, we only need the last part "/new"
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}

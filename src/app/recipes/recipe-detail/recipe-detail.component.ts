import { Component, OnInit, Input } from '@angular/core';

import { RecipesService } from '../shared/services/recipes.service';
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() { }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}

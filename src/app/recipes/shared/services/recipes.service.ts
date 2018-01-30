import { EventEmitter, Injectable } from '@angular/core';

import { ShoppingListService } from '../../../shopping-list/shared/services/shopping-list.service';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../../../shared/models/ingredient.model';

@Injectable()
export class RecipesService {

    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test recipe 01', 'Description text 01',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Test recipe 02', 'Description text 02',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 2)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        /* .slice() with no variables will return a copy of the array, not a pointer to access the list directly */
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}

import { EventEmitter } from '@angular/core';

import { Ingredient } from '../../../shared/models/ingredient.model';

export class ShoppingListService {

    public ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.emitChanges();
    }

    addIngredients(ingredients: Ingredient[]) {
        // " ... " <-- Spread operator (ES6): Turns an array of elements into a list of elements
        this.ingredients.push(...ingredients);
        this.emitChanges();
    }

    private emitChanges() {
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}

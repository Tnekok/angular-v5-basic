import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../../../shared/models/ingredient.model';

export class ShoppingListService {

    public ingredientsChanged = new Subject<Ingredient[]>();
    public startedEditing = new Subject<number>();

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

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.emitChanges();
    }

    deleteIngredient(index: number) {
        // splice(index, n) allows us to start at an index position in the array and remove n elements
        this.ingredients.splice(index, 1);
        this.emitChanges();
    }

    private emitChanges() {
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}

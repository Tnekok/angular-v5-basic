import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../../shared/models/ingredient.model';

export interface AppState {
    shoppingList: State;
}

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

/*
    We use FUNCTION instead of class for reducers
    the arguments for the function will be passed into it automatically by ngrx
    This function is triggered when an action is dispatched
*/
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {

    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, // current state of the app
                ingredients: [ ...state.ingredients, action.payload ] // we need to import the information of the action taken
            };

        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [ ...state.ingredients, ...action.payload ]
            };

        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex]; // obtain the current ingredient by index
            const updatedIngredient = { ...ingredient, ...action.payload.ingredient }; // get the updated ingredient
            const newIngredientsList = [ ...state.ingredients ]; // make a list in an immutable way
            newIngredientsList[state.editedIngredientIndex] = updatedIngredient;    // set the correct ingredient to the new one
            return {
                ...state,
                ingredients: newIngredientsList,
                editedIngredient: null,
                editedIngredientIndex: -1
            };

        case ShoppingListActions.DELETE_INGREDIENT:
            const ingredients = [ ...state.ingredients ]; // make the list in an immutable way
            ingredients.splice(state.editedIngredientIndex, 1);  // remove the item
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };

        case ShoppingListActions.START_EDIT:
            const editedIngredient = { ...state.ingredients[action.payload] };
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            };

        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };

        default:
            return state;
    }
}

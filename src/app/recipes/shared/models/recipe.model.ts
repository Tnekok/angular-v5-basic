import { Ingredient } from '../../../shared/models/ingredient.model';

// model in pure JavaScript
// export class Recipe {
//     public name: string;
//     public description: string;
//     public imagePath: string;
//     public ingredients: Ingredient[]

//     constructor(name: string, desc: string, path: string, ingredients: Ingredient[]) {
//         this.name = name;
//         this.description = desc;
//         this.imagePath = path;
//         this.ingredients = ingredients;
//     }
// }

// the same in TypeScript
export class Recipe {

    constructor(
        public name: string,
        public description: string,
        public imagePath: string,
        public ingredients: Ingredient[]
    ) { }
}

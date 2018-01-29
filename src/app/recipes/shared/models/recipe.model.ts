// model in pure JavaScript
// export class Recipe {
//     public name: string;
//     public description: string;
//     public imagePath: string;

//     constructor(name: string, desc: string, path: string) {
//         this.name = name;
//         this.description = desc;
//         this.imagePath = path;
//     }
// }

// the same in TypeScript
export class Recipe {

    constructor(
        public name: string,
        public description: string,
        public imagePath: string
    ) { }
}

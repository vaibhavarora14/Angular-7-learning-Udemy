import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public identifier: string;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(identifier: string, name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.identifier = identifier;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}

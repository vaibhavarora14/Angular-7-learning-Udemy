export class Recipe {
    public identifier: string;
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(identifier: string, name: string, desc: string, imagePath: string) {
        this.identifier = identifier;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}

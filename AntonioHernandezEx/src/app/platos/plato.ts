import { PlatoIngredientes } from '../plato-ingredientes/plato-ingredientes';

export class Plato {
    constructor(
        public idMeal: number,
        public name: string,
        public idCategory: number,
        public idArea: number,
        public instructions: string,
        public thumbnailUrl: string,
        public tags: string,
        public youtubeUrl: string,
        public mealIngredients: PlatoIngredientes[]
    ) {}
}

import { Plato } from '../platos/plato';

export class Categoria {
    constructor(
        public idCategory: number,
        public name: string,
        public meals: Plato[]
    ) {}
}

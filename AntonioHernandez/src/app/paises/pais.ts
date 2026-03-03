import { Autor } from '../autores/autor';

export class Pais {
    constructor(
        public id: number,
        public nom_pais: string,
        public bandera: string,
        public autorId: number[],
        public autores: Autor[]
    ) {}
}

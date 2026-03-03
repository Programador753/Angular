import { Pais } from '../paises/pais';

export class Premio {
    constructor(
        public id: number,
        public nom_premio: string,
        public paisId: number,
        public pais: Pais,
        public tipo: string
    ) {}
}
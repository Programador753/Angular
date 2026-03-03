import { Pais } from '../paises/pais';

export class Autor {
    constructor(
        public id: number,
        public nom_autor: string,
        public apellido1: string,
        public apellido2: string,
        public f_nac: string | Date,
        public f_def: string | Date,
        public paisId: number,
        public pais: Pais,
        public foto: string,
        public biografia: string,
        public localidad: string,
        public autorPremios: any[],
        public autorLibros: any[]
    ) {}
}

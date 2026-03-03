export class Libro {
    constructor(
        public id: number,
        public nom_libro: string,
        public ano: number,
        public portada: string,
        public nom_archivo: string,
        public pelicula: string,
        public comentario: string,
        public serieId: number,
        public indice_serie: number
    ) {}
}
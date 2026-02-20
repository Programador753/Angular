export class Libro {
    id: number;
    nom_libro: string;
    ano: number;
    portada: string;
    nom_archivo: string;
    pelicula: string;
    comentario: string;
    serieId: number;
    indice_serie: number;

    constructor() {
        this.id = 0;
        this.nom_libro = '';
        this.ano = 0;
        this.portada = '';
        this.nom_archivo = '';
        this.pelicula = '';
        this.comentario = '';
        this.serieId = 0;
        this.indice_serie = 0;
    }
}
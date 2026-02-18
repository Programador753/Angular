export class Calificacion {
    constructor(
        public ID: number,
        public convocatoria: number,
        public asignaturaID: number,
        public alumnoID: number,
        public nota: number
    ){}
}

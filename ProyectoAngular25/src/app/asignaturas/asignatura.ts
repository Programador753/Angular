export class Asignatura {
    constructor(
        public Id: number,
        public nomAsignatura: string,
        public horas: number,
        public cursoId: number,
        public profesorID: number
    ) {}
}

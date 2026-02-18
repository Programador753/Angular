export class Alumno {
  constructor(
    public id: number,
    public nombre: string,
    public email: string,
    public foto: string,
    public cursoID: number,
    public fnac: string,
    public sexo: string,
    public nom_padre?: string,
    public pais?: string,
    public paisID?: number
  ) {}
}

import { Pais } from '../paises/pais';

export class Autor {
  id?: number;
  nom_autor?: string;
  apellido1?: string;
  apellido2?: string;
  f_nac?: string | Date;
  f_def?: string | Date;
  paisId?: number;
  pais?: Pais;
  foto?: string;
  biografia?: string;
  localidad?: string;
  autorPremios?: any[];
  autorLibros?: any[];

  constructor(init?: Partial<Autor>) {
    Object.assign(this, init);
  }
}

import type { Autor } from '../autores/autor';

export class Pais {
  id?: number;
  nom_pais?: string;
  bandera?: string;
  autorId?: number[];
  autores?: Autor[];

  constructor(init?: Partial<Pais>) {
    Object.assign(this, init);
  }
}

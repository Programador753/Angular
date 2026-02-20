import { Pais } from '../paises/pais'; // Ajusta la ruta si 'pais.ts' está en otra carpeta

export class Premio {
  id?: number;
  nom_premio?: string;
  paisId?: number;
  pais?: Pais;
  tipo?: string;

  // Constructor que permite inicializar la clase con un objeto parcial
  constructor(init?: Partial<Premio>) {
    Object.assign(this, init);
  }
}
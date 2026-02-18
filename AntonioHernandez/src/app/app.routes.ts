import { Routes } from '@angular/router';
// 1. Importas el componente del formulario
import { AutorFormularioComponent } from './autores/autor-formulario/autor-formulario.component';

export const routes: Routes = [
  // 2. Defines que cuando la URL sea 'autor-insertar', cargue ese componente
  { path: 'autor-insertar', component: AutorFormularioComponent },
  

];
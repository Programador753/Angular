import { Routes } from '@angular/router';
// 1. Importas el componente del formulario
import { AutorFormularioComponent } from './autores/autor-formulario/autor-formulario.component';
import { LibrosdelautorComponent } from './libros/librosdelautor/librosdelautor.component';
import { AutoresporpremioComponent } from './autores/autoresporpremio/autoresporpremio.component';


export const routes: Routes = [
  // 2. Defines que cuando la URL sea 'autor-insertar', cargue ese componente
  { path: 'autor-insertar', component: AutorFormularioComponent },
  { path: 'libros-por-autor', component: LibrosdelautorComponent },
  { path: 'autores-por-premio', component: AutoresporpremioComponent },


];
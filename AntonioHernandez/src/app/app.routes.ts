import { Routes } from '@angular/router';
import { AutorFormularioComponent } from './autores/autor-formulario/autor-formulario.component';
import { LibrosdelautorComponent } from './libros/librosdelautor/librosdelautor.component';
import { AutoresporpremioComponent } from './autores/autoresporpremio/autoresporpremio.component';
import { AutoresListadoComponent } from './autores/autores-listado/autores-listado.component';
import { AutoresListado2Component } from './autores/autores-listado2/autores-listado2.component';
import { UnautorComponent } from './autores/unautor/unautor.component';

export const routes: Routes = [
  { path: '', redirectTo: '/autores-lista', pathMatch: 'full' },
  { path: 'autor', component: UnautorComponent },
  { path: 'autores-lista', component: AutoresListadoComponent },
  { path: 'autor-insertar', component: AutorFormularioComponent },
  { path: 'autor-insertar/:id', component: AutorFormularioComponent },
  { path: 'autores-listado2', component: AutoresListado2Component },
  { path: 'libros-por-autor', component: LibrosdelautorComponent },
  { path: 'autores-por-premio', component: AutoresporpremioComponent },
  
];
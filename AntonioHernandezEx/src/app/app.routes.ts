import { Routes } from '@angular/router';
import { ListaNoticiasComponent } from './noticias/lista-noticias/lista-noticias.component';

export const routes: Routes = [
  { path: '', component: ListaNoticiasComponent },
  { path: 'noticias', component: ListaNoticiasComponent }
];

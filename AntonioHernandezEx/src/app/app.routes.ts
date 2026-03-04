import { Routes } from '@angular/router';
import { ExamenComponentComponent } from './examen/examen-component/examen-component.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pregunta1', pathMatch: 'full' },
  { path: 'pregunta1', component: ExamenComponentComponent, data: { pregunta: 1 } },
  { path: 'pregunta2', component: ExamenComponentComponent, data: { pregunta: 2 } },
  { path: 'pregunta3', component: ExamenComponentComponent, data: { pregunta: 3 } },
];

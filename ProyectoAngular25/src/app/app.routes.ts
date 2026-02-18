import { Routes } from '@angular/router';
import { UnalumnoComponent } from './alumnos/unalumno/unalumno.component';
import { AlumnosListadoComponent } from './alumnos/alumnos-listado/alumnos-listado.component';
import { AlumnoFormularioComponent } from './alumnos/alumno-formulario/alumno-formulario.component';
import { AlumnoListado2Component } from './alumnos/alumno-listado2/alumno-listado2.component';
import { InsertarCalificacionesComponent } from './calificaciones/insertar-calificaciones/insertar-calificaciones.component';

export const routes: Routes = [
    {path: '', redirectTo: '/alumno-lista', pathMatch: 'full'},
    {path: 'alumno', component: UnalumnoComponent},
    {path: 'alumno-lista', component: AlumnosListadoComponent},
    {path: 'alumno-insertar', component:AlumnoFormularioComponent},
    {path: 'alumno-insertar/:id', component: AlumnoFormularioComponent},
    {path: 'alumno-listado2', component: AlumnoListado2Component},
    {path: 'calificaciones', component: InsertarCalificacionesComponent}

];

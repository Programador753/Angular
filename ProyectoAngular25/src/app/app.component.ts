import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './elementos/menu/menu.component';
import { SelectorComponent } from './elementos/selector/selector.component';
import { AlumnosService } from './alumnos/alumnos.service';
import { Alumno } from './alumnos/Alumno';
import { GraficoCircularComponent } from './elementos/grafico-circular/grafico-circular.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, SelectorComponent, GraficoCircularComponent],
  template: `
  <div class="container mt-5">
    
    <app-selector
      label="Alumnos: "
      [options]="alumnos"
      (selectedValueChange)="onAlumnoChange($event)">
    </app-selector>
    
    <p class="mt-3">Alumno seleccionado ID: {{selectedAlumno}}</p>

    <hr>

    <h3>Distribución de la clase</h3>
    <app-grafico-circular [data]="datosPorSexo"></app-grafico-circular>

  </div>

  <br>

  <app-menu
    [title]="'Salesianos'"
    [menuItems]="[
      {label: 'Inicio', link: '/', icono: 'fa fa-home'},
      {label: 'Alumno', link: '/alumno', icono: 'fa fa-user'},
      {label: 'Listado', link: '/alumno-lista', icono: 'fa fa-film'},
      {label: 'Listado2', link: '/alumno-listado2', icono: 'fa fa-film'},
      {label: 'Insertar', link: '/alumno-insertar', icono: 'fa fa-pen'},
      {label: 'Calificaciones', link: '/calificaciones', icono: 'fa fa-graduation-cap'}
    ]">
  </app-menu>
  
  <div class="container mt-4">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  encabezado: string = 'DATOS COLEGIO';
  nombre: string = 'Salesianos';
  ciudad: string = 'Zaragoza';
  selectedAlumno: number = 0;

  // Variables para los componentes
  alumnos: { value: number; text: string }[] = [];
  datosPorSexo: { label: string, value: number }[] = []; 
  
  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((data: Alumno[]) => {
      
      // 1. Mapeo para el Selector
      this.alumnos = data.map((alumno => ({
        value: alumno.id,
        text: alumno.nombre
      })));

      // 2. Lógica para el Gráfico Circular
      // Usamos .toLowerCase() para evitar errores si viene 'hombre', 'Hombre' o 'HOMBRE'
      const hombres = data.filter(a => 
        a.sexo && (a.sexo.toLowerCase() === 'm' || a.sexo.toLowerCase() === 'hombre')
      ).length;

      const mujeres = data.filter(a => 
        a.sexo && (a.sexo.toLowerCase() === 'f' || a.sexo.toLowerCase() === 'mujer')
      ).length;

      this.datosPorSexo = [
        { label: 'Hombres', value: hombres },
        { label: 'Mujeres', value: mujeres }
      ];
    });
  }

  onAlumnoChange(opcionElegida: number): void {
    this.selectedAlumno = opcionElegida;
  }
}
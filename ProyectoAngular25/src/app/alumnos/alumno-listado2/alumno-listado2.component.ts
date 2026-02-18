import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Alumno } from '../Alumno';
import { AlumnosService } from '../alumnos.service';
import { PaisesService } from '../../paises/paises.service';
import { Pais } from '../../paises/pais';
import { BotonComponent } from '../../elementos/boton/boton.component';
import { AlumnoTituloPipe } from '../alumno-titulo.pipe';
import { SelectorComponent } from '../../elementos/selector/selector.component'; 

@Component({
  selector: 'app-alumno-listado2',
  imports: [CommonModule, RouterLink, BotonComponent, AlumnoTituloPipe, SelectorComponent], 
  templateUrl: './alumno-listado2.component.html',
  styleUrl: './alumno-listado2.component.css'
})
export class AlumnoListado2Component implements OnInit {
  alumnos: Alumno[] = [];
  paises: Pais[] = [];
  
  // 3. Propiedad optimizada para el selector
  opcionesSelector: { value: any, text: string }[] = [];
  opcionSeleccionada: any = 'todos';

  constructor(private losAlumnos: AlumnosService, private losPaises: PaisesService) {}

  ngOnInit(): void {
    // Carga inicial de alumnos
    this.losAlumnos.getAlumnos().subscribe(data => this.alumnos = data);

    // Carga de países y construcción de opciones para el selector
    this.losPaises.getPaises().subscribe((data: Pais[]) => {
      this.paises = data;
      // Preparamos el array aquí (solo una vez) para no sobrecargar el HTML
      this.opcionesSelector = [
        { value: 'todos', text: 'Todos' }, // Opción por defecto
        ...this.paises.map(p => ({ value: p.id, text: p.nomPais })) // Mapeamos ID y Nombre
      ];
    });
  }

  // 4. Método que maneja el cambio desde el componente selector
  onFiltroChange(valor: any): void {
    this.opcionSeleccionada = valor;

    if (valor === 'todos') {
      this.losAlumnos.getAlumnos().subscribe(data => this.alumnos = data);
    } else {
      // Como usamos IDs en el value, convertimos a número y llamamos al servicio
      this.losAlumnos.getAlumnosByPais(Number(valor)).subscribe(data => this.alumnos = data);
    }
  }

  // ... Resto de métodos (getNombrePais, eliminarAlumno) iguales ...
  getNombrePais(paisID: number): string {
    const pais = this.paises.find(p => p.id === paisID);
    return pais ? pais.nomPais : '';
  }

  eliminarAlumno(id: number) {
      if (confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
        this.losAlumnos.deleteAlumno(id).subscribe(() => {
          this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
      });
      }
    }
}
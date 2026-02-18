import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlumnoTituloPipe } from '../alumno-titulo.pipe';
import { AlumnosCountComponent } from '../alumnos-count/alumnos-count.component';
import { Alumno } from '../Alumno';
import { AlumnosService } from '../alumnos.service';
import { BotonComponent } from '../../elementos/boton/boton.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alumnos-listado',
  imports: [CommonModule, AlumnoTituloPipe, AlumnosCountComponent, BotonComponent, RouterLink],
  templateUrl: './alumnos-listado.component.html',
  styleUrl: './alumnos-listado.component.css',
  providers: [AlumnosService]
})
export class AlumnosListadoComponent implements OnInit {
  opcionSeleccionada: string = 'todos';
  alumnos: Alumno[] = []
  
  constructor(private losAlumnos: AlumnosService) {}
  
  ngOnInit(): void {

    this.losAlumnos.getAlumnos().subscribe((data: Alumno[]) => {
      this.alumnos = data;
    });
  }

  alCambiarOpcion(opcion: string): void {
    this.opcionSeleccionada = opcion;
  }

  getTodos(): number {
    return this.alumnos.length;
  }

  getHombres(): number {
    return this.alumnos.filter(alumno => alumno.sexo === 'Hombre').length;
  }

  getMujeres(): number {
    return this.alumnos.filter(alumno => alumno.sexo === 'Mujer').length;
  }

  eliminarAlumno(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
      this.losAlumnos.deleteAlumno(id).subscribe(() => {
        this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
    });
    }
  }


}
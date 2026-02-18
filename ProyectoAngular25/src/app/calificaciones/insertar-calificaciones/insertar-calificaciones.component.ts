import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalificacionesService } from '../calificaciones.service';
import { AsignaturaService } from '../../asignaturas/asignaturas.service';
import { AlumnosService } from '../../alumnos/alumnos.service';

@Component({
  selector: 'app-insertar-calificaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insertar-calificaciones.component.html',
  styleUrls: ['./insertar-calificaciones.component.css']
})
export class InsertarCalificacionesComponent implements OnInit {

  listaAlumnos: any[] = [];
  listaAsignaturas: any[] = [];
  
  // 1. 'listaCalificaciones' tendrá SIEMPRE todos los datos originales
  listaCalificaciones: any[] = [];
  // 2. 'calificacionesFiltradas' es lo que pintaremos en la tabla
  calificacionesFiltradas: any[] = [];

  nuevaCalificacion = {
    convocatoria: 0, // Usamos 0 como "filtro desactivado" o vacío
    asignaturaID: 0, // Usamos 0 como "todas las asignaturas"
    alumnoID: 0,
    nota: 0
  };

  constructor(
    private califService: CalificacionesService,
    private asigService: AsignaturaService,
    private alumService: AlumnosService
  ) {}

  ngOnInit(): void {
    this.cargarListas();
    this.cargarTabla();
  }

  cargarListas() {
    this.asigService.getAll().subscribe(data => this.listaAsignaturas = data);
    this.alumService.getAlumnos().subscribe(data => this.listaAlumnos = data);
  }

  cargarTabla() {
    this.califService.getCalificaciones().subscribe({
      next: (data) => {
        // Guardamos los datos originales
        this.listaCalificaciones = data;
        // Al principio, mostramos todo (copiamos la lista)
        this.calificacionesFiltradas = data; 
        
        // Si ya había filtros puestos, los reaplicamos
        this.aplicarFiltros(); 
      },
      error: (e) => console.error('Error cargando tabla:', e)
    });
  }

  // --- NUEVA FUNCIÓN DE FILTRADO ---
  aplicarFiltros() {
    const filtroConvocatoria = Number(this.nuevaCalificacion.convocatoria);
    const filtroAsignatura = Number(this.nuevaCalificacion.asignaturaID);

    this.calificacionesFiltradas = this.listaCalificaciones.filter(item => {
      // 1. Comprobar Convocatoria (si es 0 o null, pasa el filtro. Si no, debe coincidir)
      const pasaConvocatoria = !filtroConvocatoria || item.convocatoria === filtroConvocatoria;

      // 2. Comprobar Asignatura (si es 0, pasa el filtro. Si no, debe coincidir)
      // Nota: Comprobamos item.asignaturaID o item.asignatura?.id por si acaso
      const idItem = item.asignaturaID || item.asignatura?.id;
      const pasaAsignatura = filtroAsignatura === 0 || idItem === filtroAsignatura;

      // Deben cumplirse AMBAS condiciones
      return pasaConvocatoria && pasaAsignatura;
    });
  }

  guardar() {
    // Solo enviamos los IDs y los datos básicos
    const datosAEnviar = {
      id: 0,
      convocatoria: Number(this.nuevaCalificacion.convocatoria),
      nota: Number(this.nuevaCalificacion.nota),
      asignaturaID: Number(this.nuevaCalificacion.asignaturaID),
      alumnoID: Number(this.nuevaCalificacion.alumnoID)
      // YA NO HACEN FALTA 'asignatura' NI 'alumno' AQUÍ
    };

    if (datosAEnviar.alumnoID === 0 || datosAEnviar.asignaturaID === 0) {
      alert('Por favor selecciona un alumno y una asignatura');
      return;
    }
    
    // ... llamada al servicio ...
    this.califService.crearCalificacion(datosAEnviar).subscribe({
        next: () => {
            alert('¡Guardado!');
            this.cargarTabla();
            this.nuevaCalificacion.nota = 0;
        },
        error: (e) => alert('Error al guardar: ' + e.message)
    });
  }
}
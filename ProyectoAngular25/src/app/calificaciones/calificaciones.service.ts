import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  // Asegúrate de que el puerto (7244) es el correcto
  private apiUrl = 'https://localhost:7244/api'; 

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Alumno`);
  }

  getAsignaturas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Asignatura`);
  }

  // --- CORRECCIÓN CLAVE AQUÍ ---
  // Quitamos "/detalles" para que coincida con tu C# [HttpGet]
  getCalificaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Calificacion`);
  }

  crearCalificacion(calificacion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Calificacion`, calificacion);
  }
}
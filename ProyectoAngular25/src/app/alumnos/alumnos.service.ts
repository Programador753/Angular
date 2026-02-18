import { Injectable } from '@angular/core';
import { Alumno } from './Alumno';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  // Usa HTTPS ahora que el servidor está corriendo
  private apiUrl = 'https://localhost:7244/api/alumno';
  private apiUrlByPais = 'https://localhost:7244/api/Alumno/porPais';

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl).pipe(map(data => data ));
  }

  getAlumnoById(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
  }

  addAlumno(alumno: Alumno): Observable<Alumno> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Alumno>(this.apiUrl, alumno, { headers });
  }

  deleteAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAlumnosByPais(id: number): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.apiUrlByPais}/${id}`).pipe(map(data => data ));
  }

}
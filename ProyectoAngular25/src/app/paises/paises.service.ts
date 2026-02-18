import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Alumno }from '../alumnos/Alumno';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  // Usa HTTPS ahora que el servidor está corriendo
  private apiUrl = 'https://localhost:7244/api/pais';

 constructor(private http: HttpClient) { }

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl).pipe(map(data => data ));
  }

  getPaisPorId(id: number): Observable<Pais> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pais>(url).pipe(map(data => data ));
  }

}

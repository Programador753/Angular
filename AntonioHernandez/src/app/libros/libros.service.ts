import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from './libro'; // Asegúrate de tener la interfaz Libro creada

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'https://localhost:7195/api/Libro'; // Ajusta a tu URL real

  constructor(private http: HttpClient) { }

  // Método para obtener libros filtrados por autor
  getLibrosPorAutor(autorId: number): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.apiUrl}/${autorId}`);
  }
}
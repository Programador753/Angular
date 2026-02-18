import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz para el tipado fuerte (opcional pero recomendado)
export interface Asignatura {
  id: number;
  nombre: string;
  // Agrega otras propiedades si tu API devuelve más cosas, como 'curso', 'profesorId', etc.
}

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  // Asegúrate de que este puerto coincida con tu API .NET
  private apiUrl = 'https://localhost:7244/api/Asignatura'; 

  constructor(private http: HttpClient) { }

  // Método para obtener la lista para el Dropdown
  getAll(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.apiUrl);
  }
}
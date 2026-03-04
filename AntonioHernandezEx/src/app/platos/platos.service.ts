import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato } from './plato';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {
  private apiUrl = 'https://localhost:7109/api/Meals';

  constructor(private readonly http: HttpClient) {}

  getPlatos(): Observable<Plato[]> {
    return this.http.get<Plato[]>(this.apiUrl);
  }

  getPlatoById(id: number): Observable<Plato> {
    return this.http.get<Plato>(`${this.apiUrl}/${id}`);
  }

  getPlatosPorCategoria(idCategory: number): Observable<Plato[]> {
    return this.http.get<Plato[]>(`${this.apiUrl}/category/${idCategory}`);
  }

  insertarPlato(plato: any): Observable<Plato> {
    return this.http.post<Plato>(this.apiUrl, plato);
  }
}

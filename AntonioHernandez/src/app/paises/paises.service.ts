import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  // CORRECCIÓN: URL completa al servidor
  private readonly baseUrl = 'https://localhost:7195/api/Pais'; 

  constructor(private readonly http: HttpClient) {}

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.baseUrl);
  }

  getPaisById(id: number): Observable<Pais> {
    return this.http.get<Pais>(`${this.baseUrl}/${id}`);
  }

  createPais(pais: Pais): Observable<Pais> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Pais>(this.baseUrl, pais, { headers });
  }

  updatePais(id: number, pais: Pais): Observable<Pais> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Pais>(`${this.baseUrl}/${id}`, pais, { headers });
  }

  deletePais(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
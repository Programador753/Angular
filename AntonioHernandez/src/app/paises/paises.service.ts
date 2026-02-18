import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private readonly baseUrl = '/api/paises';

  constructor(private readonly http: HttpClient) {}

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.baseUrl);
  }

  getPaisById(id: number): Observable<Pais> {
    return this.http.get<Pais>(`${this.baseUrl}/${id}`);
  }

  createPais(pais: Pais): Observable<Pais> {
    return this.http.post<Pais>(this.baseUrl, pais);
  }

  updatePais(id: number, pais: Pais): Observable<Pais> {
    return this.http.put<Pais>(`${this.baseUrl}/${id}`, pais);
  }

  deletePais(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

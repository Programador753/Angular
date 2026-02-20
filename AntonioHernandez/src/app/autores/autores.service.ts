import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from './autor';
import { AutorConAnio } from './autoresporpremio/autoresporpremio.component';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private apiUrl = 'https://localhost:7195/api/Autor'; // Verifica si tu backend usa /autores o /autor

  constructor(private readonly http: HttpClient) {}

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl);
  }

  getAutorById(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/${id}`);
  }

  createAutor(autor: Autor): Observable<Autor> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Autor>(this.apiUrl, autor, { headers });
  }

  updateAutor(id: number, autor: Autor): Observable<Autor> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Autor>(`${this.apiUrl}/${id}`, autor, { headers });
  }

  deleteAutor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAutoresPorPremio(premioId: number): Observable<AutorConAnio[]> {
  // Ajusta la URL a la que corresponda en tu API de .NET
  return this.http.get<AutorConAnio[]>(`https://localhost:7195/api/Autor/autores-por-premio/${premioId}`);
}
}
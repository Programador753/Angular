import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia, Categoria } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private apiUrl = 'https://localhost:7109/api/Noticias';
  private categoriasUrl = 'https://localhost:7109/api/Categorias';

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl);
  }

  getNoticiasPorCategoria(categoriaId: number): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${this.apiUrl}?categoriaId=${categoriaId}`);
  }

  getNoticia(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(`${this.apiUrl}/${id}`);
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriasUrl);
  }
}

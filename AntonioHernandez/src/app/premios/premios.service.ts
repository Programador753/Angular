import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Premio } from './premio';

@Injectable({
  providedIn: 'root'
})
export class PremiosService {
  // Asegúrate de que esta sea la URL y el puerto correctos de tu API de .NET
  private apiUrl = 'https://localhost:7195/api/Premio'; 

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de premios
  getPremios(): Observable<Premio[]> {
    return this.http.get<Premio[]>(this.apiUrl);
  }
}
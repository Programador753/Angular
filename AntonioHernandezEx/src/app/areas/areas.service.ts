import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  private apiUrl = 'https://localhost:7109/api/Areas';

  constructor(private readonly http: HttpClient) {}

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.apiUrl);
  }
}

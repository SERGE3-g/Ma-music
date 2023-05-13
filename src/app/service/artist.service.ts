import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artista } from '../model/artista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  readonly url: string = 'http://localhost:3000/artists';

  constructor(private http: HttpClient) {}

  save(artista: Artista): Observable<Artista> {
    return this.http.post<Artista>(this.url, artista);
  }

  findById(artistaId: number): Observable<Artista> {
    return this.http.get<Artista>(`${this.url}/${artistaId}`);
  }

  findAll(): Observable<Array<Artista>> {
    return this.http.get<Array<Artista>>(this.url);
  }
}

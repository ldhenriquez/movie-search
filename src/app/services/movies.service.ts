import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'TU_API_KEY'; // Sustituir por tu clave de API

  constructor(private http: HttpClient) { }

  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query,
        page: page.toString()
      }
    });
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}`, {
      params: { api_key: this.apiKey }
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'add2c1e365cbeab82357513b268588c3'; // Sustituir por tu clave de API

  constructor(private http: HttpClient) { }

  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query,
        page: page.toString()
      }
    }).pipe(
      catchError(error => {
        // Aquí se puede manejar el error de la API y devolver un mensaje adecuado
        console.error('Error al obtener las peliculas:', error);
        return throwError('Ocurrió un problema al obtener la lista de películas. Intenta más tarde.');
      })
    );
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}`, {
      params: { api_key: this.apiKey }
    }).pipe(
      catchError(error => {
        // Aquí se puede manejar el error de la API y devolver un mensaje adecuado
        console.error('Error al obtener los detalles de la película:', error);
        return throwError('Ocurrió un problema al obtener los detalles de la película. Intenta más tarde.');
      })
    );
  }

  getMovieCredits(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/credits`, {
      params: { api_key: this.apiKey }
    }).pipe(
      catchError(error => {
        console.error('Error al obtener el reparto:', error);
        return throwError('Ocurrió un problema al obtener el reparto de la película. Intenta más tarde.');
      })
    );
  }

}

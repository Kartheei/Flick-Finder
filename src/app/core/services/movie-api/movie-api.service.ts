import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreModule } from '../../core.module';
import { MovieApiResponse, GenreResponse, TrendingMovieResponse } from '../../models/index';
@Injectable({
  providedIn: CoreModule
})
export class MovieApiService {
  private API_URL = 'https://api.themoviedb.org/3';
  private API_KEY = '837e40720fb2f8a57c16193bca24653c';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<MovieApiResponse> {
    return this.http.get<MovieApiResponse>(`${this.API_URL}/movie/popular?api_key=${this.API_KEY}`);
  }

  getGenre(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`${this.API_URL}/genre/movie/list?language=en&api_key=${this.API_KEY}`);
  }

  getTrendingMovies(): Observable<TrendingMovieResponse> {
    return this.http.get<TrendingMovieResponse>(`${this.API_URL}/trending/movie/day?language=en-USs&api_key=${this.API_KEY}`)
  }
}

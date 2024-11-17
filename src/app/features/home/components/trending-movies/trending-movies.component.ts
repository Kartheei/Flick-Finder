import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../../../core/services/movie-api/movie-api.service';
import { TrendingmMovies, Genre } from '../../../../core/models/index';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {
  trendingMovies: TrendingmMovies[] = [];
  genre: Genre[] = [];

  constructor(private service: MovieApiService) { }

  ngOnInit(): void {
    this.loadTrendingMovies();
  }

  loadTrendingMovies() {
    forkJoin({
      movieResponse: this.service.getTrendingMovies(),
      genreResponse: this.service.getGenre()
    }).subscribe(({ movieResponse, genreResponse }) => {
      this.genre = genreResponse.genres;
      this.trendingMovies = movieResponse.results.map(movie => ({
        ...movie,
        genreNames: movie.genre_ids.map(genreId => this.getGenreNameById(genreId))
      }))
      console.log("Trending movies list", this.trendingMovies);

    })
  }
  getGenreNameById(id: number): string {
    const genre = this.genre.find(genre => genre.id === id);
    return genre ? genre.name : 'Unknown';
  }
  getMoviePoster(path: string) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}

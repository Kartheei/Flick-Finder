import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../../../core/services/movie-api/movie-api.service';
import { Genre, Movie } from '../../../../core/models/index';
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  popularMovies: Movie[] = [];
  genres: Genre[] = [];

  constructor(private movieService: MovieApiService) { }

  ngOnInit(): void {
    this.loadMoviesWithGenre();

  }
  loadMoviesWithGenre() {
    forkJoin({
      movieResponse: this.movieService.getPopularMovies(),
      genreResponse: this.movieService.getGenre()
    }).subscribe(({ movieResponse, genreResponse }) => {
      this.genres = genreResponse.genres;
      this.popularMovies = movieResponse.results.map(movie => ({
        ...movie,
        genreNames: movie.genre_ids.map(genreId => this.getGenreNameById(genreId))

      }))
      console.log("popular movies list", this.popularMovies);

    })
  }

  getGenreNameById(id: number): string {
    const genre = this.genres.find(genre => genre.id === id);
    return genre ? genre.name : 'Unknown';
  }


  getMoviePoster(path: string) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}

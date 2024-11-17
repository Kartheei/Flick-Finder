export interface TrendingmMovies {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    popularity: number;
    genre_ids: number[];
}

export interface TrendingMovieResponse {
    results: TrendingmMovies[];
}

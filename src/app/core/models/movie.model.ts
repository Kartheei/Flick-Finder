export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    genreNames: string[];
    genre_ids: number[];
}

export interface MovieApiResponse {
    results: Movie[];
}


import { createModel } from '@rematch/core';
import { CallApi } from 'helpers';
import { Endpoints } from 'helpers/constants';
import { Cast, Genre, Movie, SearchResultQuery } from 'store/types/MovieModelTypes';
import { RootModel } from '.';

type MoviesInitialState = {
  movies: Movie[];
  genres: Genre[];
  searchResult: Movie[];
  favoriteMovies: Movie[];
  selectedMovieCast: Cast[];
};

const Movies = createModel<RootModel>()({
  state: {
    movies: [],
    genres: [],
    searchResult: [],
    favoriteMovies: [],
    selectedMovieCast: [],
  } as MoviesInitialState,
  reducers: {
    setMovies: (state, payload: Movie[]) => ({ ...state, movies: payload }),
    setGenres: (state, payload: Genre[]) => ({ ...state, genres: payload }),
    setSearchResult: (state, payload: Movie[]) => ({ ...state, searchResult: payload }),
    setFavoriteMovies: (state, payload: Movie[]) => ({ ...state, favoriteMovies: payload }),
    setSelectedMovieCast: (state, payload: Cast[]) => ({ ...state, selectedMovieCast: payload }),
  },
  effects: () => ({
    async getMovies() {
      const movies = await CallApi<Movie[]>(Endpoints.movies, 'results');
      this.setMovies(movies);
    },

    async getGenres() {
      const genres = await CallApi<Genre[]>(Endpoints.genre, 'genres');
      this.setGenres(genres);
    },

    async getSearchResult({ query, page }: SearchResultQuery) {
      const searchResult = await CallApi<Movie[]>(Endpoints.search(query, page), 'results');
      this.setSearchResult(searchResult);
    },

    async getCast(movieId: number) {
      const cast = await CallApi<Cast[]>(Endpoints.cast(movieId), 'cast');
      this.setSelectedMovieCast(cast);
    },
  }),
});

export default Movies;

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
  upcomingMovies: Movie[];
  selectedMovieCast: {
    [movieId: number]: Cast[];
  };
};

const Movies = createModel<RootModel>()({
  state: {
    movies: [],
    genres: [],
    searchResult: [],
    favoriteMovies: [],
    selectedMovieCast: [],
    upcomingMovies: [],
  } as MoviesInitialState,
  reducers: {
    setMovies: (state, payload: Movie[]) => ({ ...state, movies: payload }),
    setGenres: (state, payload: Genre[]) => ({ ...state, genres: payload }),
    setSearchResult: (state, payload: Movie[]) => ({ ...state, searchResult: payload }),
    setFavoriteMovies: (state, payload: Movie[]) => ({ ...state, favoriteMovies: payload }),
    setUpcomingMovies: (state, payload: Movie[]) => ({ ...state, upcomingMovies: payload }),
    setSelectedMovieCast: (state, payload: { [movieId: number]: Cast[] }) => ({
      ...state,
      selectedMovieCast: {
        ...state.selectedMovieCast,
        ...payload,
      },
    }),
  },
  effects: () => ({
    async getMovies() {
      const movies = await CallApi<Movie[]>(Endpoints.movies, 'results');
      this.setMovies(movies);
    },

    async getUpcomingMovies() {
      const movies = await CallApi<Movie[]>(Endpoints.upcomingMovies(), 'results');
      this.setUpcomingMovies(movies);
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
      this.setSelectedMovieCast({ [movieId]: cast });
    },
  }),
});

export default Movies;

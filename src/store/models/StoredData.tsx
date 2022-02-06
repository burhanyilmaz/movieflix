import { createModel } from '@rematch/core';
import { CallApi } from 'helpers';
import { Endpoints } from 'helpers/constants';
import { Movie } from 'store/types/MovieModelTypes';
import { RootModel } from '.';

type StoredDataInitialState = {
  favoriteMovies: Movie[];
};

const StoredData = createModel<RootModel>()({
  state: {
    favoriteMovies: [],
  } as StoredDataInitialState,
  reducers: {
    setFavoriteMovies: (state, payload: Movie) => {
      const movieExist =
        state.favoriteMovies?.filter((movie: Movie) => movie?.id === payload?.id).length > 0;

      if (movieExist) {
        return {
          ...state,
          favoriteMovies: state.favoriteMovies?.filter((movie: Movie) => movie?.id !== payload?.id),
        };
      }

      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, payload],
      };
    },
    setAllFavoriteMovies: (state, payload: Movie[]) => ({ ...state, favoriteMovies: payload }),
  },
  effects: () => ({
    async getFavoriteMovieUpdate(params, state) {
      const promises: any = [];
      const { favoriteMovies } = state.storedData;

      favoriteMovies?.forEach((movie: Movie) => {
        if (movie?.id) {
          promises.push(CallApi<Movie>(Endpoints.movie(movie?.id), ''));
        }
      });

      const result = await Promise.all(promises);
      const favoriteMoviesFromApi = result.filter((movie: Movie) => movie.id);

      this.setAllFavoriteMovies(
        favoriteMovies?.map((movie: Movie) => {
          const movieFromApi = favoriteMoviesFromApi?.find(
            (movieFromApi_: Movie) => movieFromApi_?.id === movie?.id,
          );

          return movieFromApi || movie;
        }),
      );
    },
  }),
});

export default StoredData;

import 'tests/mock';
import { init, RematchStore } from '@rematch/core';
import { models, RootModel } from 'store/models';
import { MockData } from 'tests/data';
import fetchMock from 'jest-fetch-mock';
import { Endpoints } from 'helpers/constants';

describe('[count] model', () => {
  const { movies, genres, casts } = MockData;
  let store: RematchStore<RootModel, Record<string, never>>;
  const getState = (
    field: 'movies' | 'genres' | 'searchResult' | 'favoriteMovies' | 'selectedMovieCast',
  ) => store?.getState().movies[field] as [any];

  beforeEach(() => {
    store = init<RootModel>({
      models,
    });
  });

  it('set state correctly on movies model ', async () => {
    const { setMovies, setGenres, setFavoriteMovies, setSearchResult, setSelectedMovieCast } =
      store.dispatch.movies;

    setMovies([]);
    expect(getState('movies').length).toEqual(0);

    setMovies(movies);
    expect(movies.length).toEqual(getState('movies').length);

    setFavoriteMovies(movies);
    expect(movies.length).toEqual(getState('favoriteMovies').length);

    setGenres(genres);
    expect(genres.length).toEqual(getState('genres').length);

    setSearchResult(movies);
    expect(movies.length).toEqual(getState('searchResult').length);

    setSelectedMovieCast(casts);
    expect(casts.length).toEqual(getState('selectedMovieCast').length);
  });

  it('effects set state correctly on movies model ', async () => {
    fetchMock.mockIf(Endpoints.movies, JSON.stringify({ results: movies }));
    await store.dispatch.movies.getMovies();
    expect(movies.length).toEqual(getState('movies').length);

    fetchMock.mockIf(Endpoints.genre, JSON.stringify({ genres }));
    await store.dispatch.movies.getGenres();
    expect(genres.length).toEqual(getState('genres').length);

    fetchMock.mockIf(Endpoints.search('star', 1), JSON.stringify({ results: movies.slice(0, 5) }));
    await store.dispatch.movies.getSearchResult({ query: 'star' });
    expect(getState('searchResult').length).toEqual(movies.slice(0, 5).length);

    fetchMock.mockIf(Endpoints.cast(1234), JSON.stringify({ cast: casts.slice(0, 3) }));
    await store.dispatch.movies.getCast(1234);
    expect(getState('selectedMovieCast').length).toEqual(casts.slice(0, 3).length);
  });
});

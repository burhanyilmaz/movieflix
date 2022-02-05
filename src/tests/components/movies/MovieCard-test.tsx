import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import TestIds from 'helpers/TestIds';
import MovieCard from 'components/movies/MovieCard';
import { MockData } from 'tests/data';

describe('Movie Card', () => {
  it('Horizontal Movie Card renders correctly', () => {
    const { getByTestId, getByText, queryAllByTestId } = render(
      <MovieCard movie={MockData.MovieFirst} genres={MockData.genres.slice(0, 4)} />,
    );

    const ratingText = getByText(`${MockData.MovieFirst.vote_average}/10 IMDb`);

    expect(ratingText).toBeTruthy();
    expect(getByTestId(TestIds.POSTER_IMAGE)).toBeTruthy();
    expect(getByTestId(TestIds.MOVIE_YEAR)).toBeTruthy();
    expect(getByTestId(TestIds.MOVIE_RATING_STAR)).toBeTruthy();
    expect(
      getByText(new Date(MockData.MovieFirst.release_date).getFullYear().toString()),
    ).toBeTruthy();
    expect(queryAllByTestId(TestIds.MOVIE_GENRES).length).toBe(MockData.genres.slice(0, 4).length);
  });

  it('Vertical Movie Card renders correctly', () => {
    const { getByTestId, getByText, queryAllByTestId } = render(
      <MovieCard movie={MockData.MovieFirst} type="vertical" />,
    );
    const ratingText = getByText(`${MockData.MovieFirst.vote_average}/10 IMDb`);

    expect(ratingText).toBeTruthy();
    expect(getByTestId(TestIds.POSTER_IMAGE)).toBeTruthy();
    expect(getByTestId(TestIds.MOVIE_YEAR)).toBeTruthy();
    expect(getByTestId(TestIds.MOVIE_RATING_STAR)).toBeTruthy();
    expect(
      getByText(new Date(MockData.MovieFirst.release_date).getFullYear().toString()),
    ).toBeTruthy();
    expect(queryAllByTestId(TestIds.MOVIE_GENRES).length).toBe(0);
  });
});

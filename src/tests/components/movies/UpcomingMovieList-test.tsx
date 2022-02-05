import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import TestIds from 'helpers/TestIds';
import { MockData } from 'tests/data';
import UpcomingMovieList from 'components/movies/UpcomingMovieList';

describe('Upcoming Movie List', () => {
  it('Upcoming Movie List  renders correctly', () => {
    const { getByText, queryAllByTestId, queryAllByText } = render(
      <UpcomingMovieList movies={MockData.movies.slice(0, 5)} />,
    );

    MockData.movies.slice(0, 5).forEach((movie) => {
      const ratingText = queryAllByText(`${movie.vote_average}/10 IMDb`);
      const movieTitle = getByText(movie.title);

      expect(ratingText.length > 0).toBeTruthy();
      expect(movieTitle).toBeTruthy();
    });
    expect(getByText('Upcoming')).toBeTruthy();
    expect(queryAllByTestId(TestIds.UPCOMING_MOVIE_CARD).length).toBe(
      MockData.movies.slice(0, 5).length,
    );
  });
});

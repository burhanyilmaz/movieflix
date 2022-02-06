import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import TestIds from 'helpers/TestIds';
import { MockData } from 'tests/data';
import VerticalMovieList from 'components/screenBase/movies/VerticalMovieList';

describe('Popular Movie List', () => {
  it('Popular Movie List  renders correctly', () => {
    const { getByText, queryAllByTestId, queryAllByText } = render(
      <VerticalMovieList
        RenderEmpty={null}
        movies={MockData.movies.slice(0, 5)}
        genres={MockData.genres}
      />,
    );

    MockData.movies.slice(0, 5).forEach((movie) => {
      const ratingText = queryAllByText(`${movie.vote_average}/10 IMDb`);
      const movieTitle = getByText(movie.title);

      expect(ratingText.length > 0).toBeTruthy();
      expect(movieTitle).toBeTruthy();
    });
    expect(getByText('Popular')).toBeTruthy();
    expect(queryAllByTestId(TestIds.POPULAR_MOVIE_CARD).length).toBe(
      MockData.movies.slice(0, 5).length,
    );
  });
});

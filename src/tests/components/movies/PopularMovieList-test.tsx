import { Text } from 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import TestIds from 'helpers/TestIds';
import { MockData } from 'tests/data';
import VerticalMovieList from 'components/screenBase/movies/VerticalMovieList';

describe('Popular Movie List', () => {
  it('Popular Movie List  renders correctly', () => {
    const onPress = jest.fn();

    const { getByText, queryAllByTestId, queryAllByText } = render(
      <VerticalMovieList
        title="Popular"
        onPressMovie={onPress}
        genres={MockData.genres}
        movies={MockData.movies.slice(0, 5)}
        RenderEmpty={() => <Text>Empty Component</Text>}
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

    const renderEmptyContent = render(
      <VerticalMovieList
        title="Popular"
        onPressMovie={onPress}
        genres={[]}
        movies={[]}
        RenderEmpty={() => <Text>Empty Component</Text>}
      />,
    );

    expect(renderEmptyContent.getByText('Empty Component')).toBeTruthy();
  });
});

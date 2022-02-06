import 'react-native';
import 'tests/mock';
import { fireEvent, render, RenderAPI, waitFor } from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';
import SearchNavigator from 'navigators/SearchNavigator';
import TestIds from 'helpers/TestIds';
import { MovieFirst } from 'tests/data';
import { Endpoints } from 'helpers/constants';
import { actSleep, checkComponentToBeTruthy, mockStore, waitForPress } from '../utils';

const { GO_BACK_BUTTON, MAGNIFYING_GLASS, SEARCH_INPUT } = TestIds;

describe('Search screen', () => {
  let renderedComponent: RenderAPI;

  beforeEach(async () => {
    fetchMock.mockIf(Endpoints.search('star', 1), JSON.stringify({ results: [MovieFirst] }));

    await waitFor(async () => {
      renderedComponent = mockStore(SearchNavigator, render).component;
    });
  });

  it('Movie details screen renders correctly', async () => {
    const magnifyIcon = renderedComponent.getByTestId(MAGNIFYING_GLASS);
    const searchInput = renderedComponent.getByTestId(SEARCH_INPUT);
    const emptyText = renderedComponent.getByText('Here is movie search area');
    const emptySubText = renderedComponent.getByText('You can search movie or show');

    checkComponentToBeTruthy([magnifyIcon, searchInput, emptyText, emptySubText]);
  });

  it('Search movies and check result', async () => {
    const searchInput = renderedComponent.getByTestId(SEARCH_INPUT);
    await waitForPress(searchInput);

    await waitFor(async () => fireEvent(searchInput, 'onChangeText', 'star'));
    await actSleep(400);

    let moviePoster = renderedComponent.getByTestId(TestIds.SEARCH_MOVIE_CARD);
    checkComponentToBeTruthy([moviePoster]);

    fetchMock.mockIf(Endpoints.search('starx', 1), JSON.stringify({ results: [] }));

    await waitFor(async () => fireEvent(searchInput, 'onChangeText', 'starx'));
    await actSleep(400);

    moviePoster = renderedComponent.queryByTestId(TestIds.SEARCH_MOVIE_CARD);
    expect(moviePoster).toBeNull();

    const noResultTitle = await renderedComponent.findByText('No results found');

    checkComponentToBeTruthy([noResultTitle]);
  });

  it('Navigate to movie details and back to search', async () => {
    const searchInput = renderedComponent.getByTestId(SEARCH_INPUT);
    await actSleep(400);

    await waitForPress(searchInput);
    await waitFor(async () => fireEvent(searchInput, 'onChangeText', 'star'));
    await actSleep(400);

    const moviePoster = renderedComponent.getByTestId(TestIds.SEARCH_MOVIE_CARD);
    await waitForPress(moviePoster);

    const titleComponent = renderedComponent.queryAllByText(MovieFirst.title);
    const goBackButton = renderedComponent.getByTestId(GO_BACK_BUTTON);

    checkComponentToBeTruthy([titleComponent.length > 1, goBackButton]);

    await waitForPress(goBackButton);

    const searchInputAfterBack = renderedComponent.getByTestId(SEARCH_INPUT);
    checkComponentToBeTruthy([searchInputAfterBack]);
  });
});

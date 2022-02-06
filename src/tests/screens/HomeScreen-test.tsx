import 'react-native';
import 'tests/mock';
import { render, RenderAPI, waitFor } from '@testing-library/react-native';
import HomeNavigator from 'navigators/HomeNavigator';
import {
  actSleep,
  checkComponentToBeTruthy,
  mockApiForHomeNav,
  mockStore,
  waitForPress,
} from 'tests/utils';
import TestIds from 'helpers/TestIds';
import { MockData } from 'tests/data';
import { RematchStore } from '@rematch/core';
import { RootModel } from 'store/models';
import { FullModel } from 'store';

const { GO_BACK_BUTTON } = TestIds;

describe('Home screen', () => {
  let renderedComponent: RenderAPI;
  let store: RematchStore<RootModel, FullModel>;

  beforeEach(async () => {
    await waitFor(async () => {
      const { component, store: store_ } = mockStore(HomeNavigator, render);
      renderedComponent = component;
      store = store_;
    });
    mockApiForHomeNav();
    await actSleep();
    await waitFor(async () => {
      store.dispatch.internetConnection.setInternetConnection(true);
    });
  });

  it('Home screen renders correctly', async () => {
    await actSleep();

    expect(renderedComponent.getByText('Upcoming')).toBeTruthy();
    expect(renderedComponent.getByText('Popular')).toBeTruthy();

    expect(renderedComponent.queryAllByTestId(TestIds.UPCOMING_MOVIE_CARD).length).toBe(5);
    expect(renderedComponent.queryAllByTestId(TestIds.POPULAR_MOVIE_CARD).length).toBe(5);
  });

  it('Navigate to movie details correctly', async () => {
    expect(renderedComponent.getByText('Upcoming')).toBeTruthy();
    expect(renderedComponent.getByText('Popular')).toBeTruthy();
    await actSleep();

    const toClick = renderedComponent.getAllByTestId(TestIds.UPCOMING_MOVIE_CARD)[0];
    await waitForPress(toClick);
    await actSleep();

    const title = await renderedComponent.findByText(`${MockData.MovieFirst.title}`);
    checkComponentToBeTruthy([title]);

    const clickGoBack = renderedComponent.getByTestId(GO_BACK_BUTTON);
    await waitForPress(clickGoBack);
    await actSleep();

    const toClickMovieTwo = renderedComponent.getAllByTestId(TestIds.UPCOMING_MOVIE_CARD)[1];
    await waitForPress(toClickMovieTwo);
    await actSleep();
    const title2 = await renderedComponent.findByText(`${MockData.MovieFirst.title}`);
    checkComponentToBeTruthy([title2]);
  });
});

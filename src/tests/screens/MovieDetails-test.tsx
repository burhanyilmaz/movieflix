import 'react-native';
import 'tests/mock';
import { render, RenderAPI, waitFor } from '@testing-library/react-native';
import HomeNavigator from 'navigators/HomeNavigator';
import TestIds from 'helpers/TestIds';
import { MovieFirst } from 'tests/data';
import { RematchStore } from '@rematch/core';
import { RootModel } from 'store/models';
import { FullModel } from 'store';
import Languages from 'data/Languages';
import {
  actSleep,
  checkComponentToBeTruthy,
  mockApiForHomeNav,
  mockStore,
  waitForPress,
} from '../utils';

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

  it('Movie details screen renders correctly', async () => {
    const { vote_average, original_language, title } = MovieFirst;
    expect(renderedComponent.getByText('Upcoming')).toBeTruthy();
    expect(renderedComponent.getByText('Popular')).toBeTruthy();
    await actSleep();

    const toClick = renderedComponent.getAllByTestId(TestIds.UPCOMING_MOVIE_CARD)[0];
    await waitForPress(toClick);
    await actSleep();

    const titleText = await renderedComponent.findByText(`${title}`);
    const point = await renderedComponent.findByText(`${vote_average}/10 IMDb`);
    const langLabel = await renderedComponent.findByText('Language');
    const lang = await renderedComponent.findByText(Languages[original_language].name);
    const releaseDateLabel = await renderedComponent.findByText('Release Date');
    const voteCountLabel = await renderedComponent.findByText('Vote Count');
    const overviewLabel = await renderedComponent.findByText('Overview');
    const castLabel = await renderedComponent.findByText('Cast');

    checkComponentToBeTruthy([
      titleText,
      point,
      langLabel,
      lang,
      releaseDateLabel,
      voteCountLabel,
      overviewLabel,
      castLabel,
    ]);
  });

  it('Movie details screen navigate back correctly', async () => {
    expect(renderedComponent.getByText('Upcoming')).toBeTruthy();
    expect(renderedComponent.getByText('Popular')).toBeTruthy();
    await actSleep();

    const toClick = renderedComponent.getAllByTestId(TestIds.UPCOMING_MOVIE_CARD)[0];
    await waitForPress(toClick);
    await actSleep();

    const clickGoBack = renderedComponent.getByTestId(GO_BACK_BUTTON);
    await waitForPress(clickGoBack);
    await actSleep();

    expect(renderedComponent.getByText('Upcoming')).toBeTruthy();
    expect(renderedComponent.getByText('Popular')).toBeTruthy();
  });
});

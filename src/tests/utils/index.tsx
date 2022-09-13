import 'tests/mock';
import React from 'react';
import { store } from 'store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, RenderAPI, RenderOptions, waitFor, act } from '@testing-library/react-native';
import { Endpoints } from 'helpers/constants';
import fetchMock from 'jest-fetch-mock';
import { MockData } from 'tests/data';

export const mockStore = (
  Component: any,
  render: (component: React.ReactElement<any>, options?: RenderOptions) => RenderAPI,
  useNavigationContainer = true,
) => {
  const Container = useNavigationContainer ? NavigationContainer : React.Fragment;
  const component = render(
    <Provider store={store}>
      <Container>
        <Component />
      </Container>
    </Provider>,
  );

  return {
    store,
    component,
  };
};

export const waitForPress = async (element: any) => {
  return waitFor(async () => {
    fireEvent(element, 'press');
  });
};

export const sleep = (ms: number) => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const actSleep = async (ms: number = 500) => {
  await act(async () => {
    await sleep(ms);
  });
};

export const checkComponentToBeTruthy = (components: any[]) => {
  expect(components).toBeTruthy();
};

const getColor = (element: any) => {
  return element.props.style[1].color;
};

export const checkColor = (element: any[], expectations: any[]) => {
  expectations.forEach((color: string, index: number) => {
    expect(getColor(element[index])).toEqual(color);
  });
};

export const getByTestIdAllTabItem = (renderedComponent: RenderAPI) => {
  const home = renderedComponent.getByTestId('Home');
  const starredMovies = renderedComponent.getByTestId('Favorite');
  const search = renderedComponent.getByTestId('Search');

  return {
    home,
    search,
    starredMovies,
  };
};

export const mockApiForHomeNav = () => {
  fetchMock.mockIf(Endpoints.movies, JSON.stringify({ results: MockData.movies }));
  fetchMock.mockIf(Endpoints.genre, JSON.stringify({ genres: MockData.genres }));
  fetchMock.mockIf(Endpoints.cast(1234), JSON.stringify({ cast: MockData.casts.slice(0, 3) }));
};

export default {};

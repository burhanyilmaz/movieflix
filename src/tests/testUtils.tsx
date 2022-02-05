import React from 'react';
import { store } from 'store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, RenderAPI, RenderOptions, waitFor } from '@testing-library/react-native';

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

export const getByTextAllTabItem = (renderedComponent: RenderAPI) => {
  const home = renderedComponent.getByText('Home');
  const starredMovies = renderedComponent.getByText('Starred');
  const search = renderedComponent.getByText('Search');

  return {
    home,
    starredMovies,
    search,
  };
};
export default {};

import React from 'react';
import MainNavigator from 'navigators/MainNavigator';
import { Provider } from 'react-redux';
import { store } from 'store';

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);

export default App;

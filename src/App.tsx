import React from 'react';
import MainNavigator from 'navigators/MainNavigator';
import { Provider } from 'react-redux';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MainNavigator />
    </PersistGate>
  </Provider>
);

export default App;

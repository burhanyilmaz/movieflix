import { createModel } from '@rematch/core';
import { RootModel } from '.';

type InternetConnectionInitialState = {
  status: undefined | boolean;
};

const InternetConnection = createModel<RootModel>()({
  state: {} as InternetConnectionInitialState,
  reducers: {
    setInternetConnection: (state, status: boolean) => {
      return {
        ...state,
        status,
      };
    },
  },
});

export default InternetConnection;

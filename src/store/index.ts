import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import persistPlugin, { getPersistor } from '@rematch/persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { models, RootModel } from './models';

export type FullModel = ExtraModelsFromLoading<RootModel>;

const persistConfig = {
  key: 'root',
  throttle: 300,
  blacklist: ['movies'],
  storage: AsyncStorage,
  whitelist: ['storedData'],
};

export const store = init<RootModel, FullModel>({
  models,
  plugins: [persistPlugin(persistConfig), loadingPlugin()],
});

export const persistor = getPersistor();

export type Store = typeof store;

export type Dispatch = RematchDispatch<RootModel>;

export type RootState = RematchRootState<RootModel, FullModel>;

export const { dispatch } = store;

export default store;

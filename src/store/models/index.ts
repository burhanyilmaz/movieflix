import { Models } from '@rematch/core';
import movies from './Movies';
import storedData from './StoredData';
import internetConnection from './InternetConnection';

export interface RootModel extends Models<RootModel> {
  movies: typeof movies;
  storedData: typeof storedData;
  internetConnection: typeof internetConnection;
}

export const models: RootModel = { movies, storedData, internetConnection };

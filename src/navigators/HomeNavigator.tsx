import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { HomeScreen, MovieDetails } from 'screens';
import { Genre, Movie } from 'store/types/MovieModelTypes';

const Stack = createNativeStackNavigator();

const CommonOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export type HomeNavigatorParamList = {
  Home: undefined;
  MovieDetail: { movie: Movie; genres: Genre[] };
};

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={CommonOptions} />
    <Stack.Screen name="MovieDetail" component={MovieDetails} options={CommonOptions} />
  </Stack.Navigator>
);

export default HomeNavigator;

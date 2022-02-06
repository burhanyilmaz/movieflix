import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Genre, Movie } from 'store/types/MovieModelTypes';
import MovieDetails from 'screens/Home/MovieDetails';
import FavoriteScreen from 'screens/Favorite/FavoriteScreen';

export type FavoriteNavigatorParamList = {
  Favorite: undefined;
  MovieDetail: { movie: Movie; genres: Genre[] };
};

const Stack = createNativeStackNavigator<FavoriteNavigatorParamList>();

const CommonOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const FavoriteNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Favorite" component={FavoriteScreen} options={CommonOptions} />
    <Stack.Screen name="MovieDetail" component={MovieDetails} options={CommonOptions} />
  </Stack.Navigator>
);

export default FavoriteNavigator;

import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Genre, Movie } from 'store/types/MovieModelTypes';
import SearchScreen from 'screens/Search/SearchScreen';
import MovieDetails from 'screens/Home/MovieDetails';

export type SearchNavigatorParamList = {
  Search: undefined;
  MovieDetail: { movie: Movie; genres: Genre[] };
};

const Stack = createNativeStackNavigator<SearchNavigatorParamList>();

const CommonOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const SearchNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} options={CommonOptions} />
    <Stack.Screen name="MovieDetail" component={MovieDetails} options={CommonOptions} />
  </Stack.Navigator>
);

export default SearchNavigator;

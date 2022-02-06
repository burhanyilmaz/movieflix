import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PopularMovieList from 'components/movies/PopularMovieList';
import SearchInput from 'components/search/SearchInput';
import SearchResultMovies from 'components/search/SearchResultMovies';
import useDebounce from 'hooks/useDebounce';
import { SearchNavigatorParamList } from 'navigators/SearchNavigator';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from 'store';
import { Movie } from 'store/types/MovieModelTypes';

type Props = NativeStackScreenProps<SearchNavigatorParamList, 'Search'>;

const SearchScreen = ({ navigation }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 200);
  const searchResult = useSelector((state: RootState) => state.movies.searchResult);
  const genres = useSelector((state: RootState) => state.movies.genres);
  const isLoading = useSelector((rootState: RootState) => rootState.loading.models.movies);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch.movies.getSearchResult({ query: debouncedSearchTerm });
    }
  }, [debouncedSearchTerm]);

  const navigateToMoviesDetail = (movie: Movie) => {
    navigation.navigate('MovieDetail', { movie, genres });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <SearchInput onChange={setSearchTerm} value={searchTerm} isLoading={isLoading} />
        <SearchResultMovies
          loading={isLoading}
          genres={genres || []}
          movies={searchResult || []}
          searchTerm={debouncedSearchTerm}
          onPressMovie={navigateToMoviesDetail}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { backgroundColor: 'white' },
  container: { height: '100%' },
});

export default SearchScreen;

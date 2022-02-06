import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchInput, SearchResultMovies } from 'components';
import useDebounce from 'hooks/useDebounce';
import { SearchNavigatorParamList } from 'navigators/SearchNavigator';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from 'store';
import { Genre, Movie } from 'store/types/MovieModelTypes';

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

  const navigateToMoviesDetail = (movie: Movie, _genres: Genre[]) => {
    navigation.navigate('MovieDetail', { movie, genres: _genres });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchInput onChange={setSearchTerm} value={searchTerm} isLoading={isLoading} />
        </View>
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
  searchContainer: { paddingHorizontal: 8 },
});

export default SearchScreen;

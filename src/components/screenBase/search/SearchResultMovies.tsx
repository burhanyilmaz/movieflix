import React, { memo, useCallback } from 'react';
import MovieCard from 'components/screenBase/movies/MovieCard';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Genre, Movie } from 'store/types/MovieModelTypes';
import { VerticalMovieSkeleton } from 'components/screenBase/movies/Skeletons';
import EmptyList from 'components/common/EmptyList';
import TestIds from 'helpers/TestIds';

type PopularMoviesProps = {
  movies: Movie[];
  genres: Genre[];
  loading: boolean;
  searchTerm: string;
  onPressMovie: (movie: Movie, genres: Genre[]) => void;
};

const SearchResultMovies = ({
  movies,
  genres,
  onPressMovie,
  loading,
  searchTerm,
}: PopularMoviesProps) => {
  const keyExtractor = (item: Movie) => item.id.toString();

  const RenderHeader = memo(() => {
    if (!loading && movies.length !== 0) {
      return (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Search Result</Text>
        </View>
      );
    }

    if (!loading && movies.length === 0 && !searchTerm) {
      return (
        <EmptyList show subtitle="You can search movie or show" title="Here is movie search area" />
      );
    }

    return null;
  });

  const processGenres = useCallback(
    (genre_ids) => genres?.filter((genre) => genre_ids.includes(genre.id)),
    [genres],
  );

  const RenderItem = useCallback(
    ({ item }) => (
      <MovieCard
        movie={item}
        onPress={onPressMovie}
        testID={TestIds.SEARCH_MOVIE_CARD}
        genres={processGenres(item.genre_ids)}
      />
    ),
    [],
  );

  const RenderEmptyComponent = memo(() => {
    if (loading) {
      return <VerticalMovieSkeleton />;
    }

    if (!loading && movies.length === 0 && searchTerm) {
      return (
        <View>
          <Text style={styles.emptyText}>No results found</Text>
        </View>
      );
    }

    return null;
  });

  return (
    <FlatList
      data={movies || []}
      key="popular-movies"
      renderItem={RenderItem}
      initialNumToRender={8}
      maxToRenderPerBatch={5}
      keyExtractor={keyExtractor}
      ListHeaderComponent={RenderHeader}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={RenderEmptyComponent}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: 'rgba(17, 14, 71, 1)',
  },
  noSearchTerm: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(17, 14, 71, 0.8)',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(17, 14, 71, 0.8)',
  },
});

export default memo(SearchResultMovies);

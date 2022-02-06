import React, { memo, useCallback } from 'react';
import MovieCard from 'components/movies/MovieCard';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Genre, Movie } from 'store/types/MovieModelTypes';
import { VerticalMovieSkeleton } from 'components/movies/Skeletons';

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
        <View style={styles.header}>
          <Text style={styles.noSearchTerm}>You can search movie or show.</Text>
        </View>
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
      <MovieCard movie={item} genres={processGenres(item.genre_ids)} onPress={onPressMovie} />
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

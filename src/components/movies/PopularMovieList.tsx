import React, { memo, useCallback } from 'react';
import MovieCard from 'components/movies/MovieCard';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Genre, Movie } from 'store/types/MovieModelTypes';
import { VerticalMovieSkeleton } from './Skeletons';

type PopularMoviesProps = {
  movies: Movie[];
  genres: Genre[];
  onPressMovie: (movie: Movie, genres: Genre[]) => void;
};

const PopularMovieList = ({ movies, genres, onPressMovie }: PopularMoviesProps) => {
  const keyExtractor = (item: Movie) => item.id.toString();

  const RenderHeader = memo(() => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular</Text>
    </View>
  ));

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

  const RenderEmptyComponent = memo(() => <VerticalMovieSkeleton />);

  return (
    <FlatList
      data={movies || []}
      key="popular-movies"
      renderItem={RenderItem}
      initialNumToRender={5}
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
    paddingLeft: 16,
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: 'rgba(17, 14, 71, 1)',
  },
});

export default memo(PopularMovieList);

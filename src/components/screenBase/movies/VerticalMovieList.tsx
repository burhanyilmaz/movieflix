/* global JSX */
import React, { memo, useCallback } from 'react';
import MovieCard from 'components/screenBase/movies/MovieCard';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Genre, Movie } from 'store/types/MovieModelTypes';

type PopularMoviesProps = {
  movies: Movie[];
  genres: Genre[];
  title?: string;
  RenderEmpty: () => JSX.Element;
  onPressMovie: (movie: Movie, genres: Genre[]) => void;
};

const VerticalMovieList = ({
  movies,
  genres,
  onPressMovie,
  title,
  RenderEmpty,
}: PopularMoviesProps) => {
  const keyExtractor = (item: Movie) => item.id.toString();

  const RenderHeader = memo(() =>
    title ? (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    ) : null,
  );

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
    if (RenderEmpty) {
      return <RenderEmpty />;
    }

    return null;
  });

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

export default memo(VerticalMovieList);

import React, { memo, useCallback } from 'react';
import MovieCard from 'components/movies/MovieCard';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Movie } from 'store/types/MovieModelTypes';
import { VerticalMovieSkeleton } from './Skeletons';

type UpcomingMoviesProps = {
  movies: Movie[];
};

const UpcomingMovieList = ({ movies }: UpcomingMoviesProps) => {
  const keyExtractor = (item: Movie) => item.id.toString();

  const RenderUpcomingHeader = memo(() => (
    <View style={styles.header}>
      <Text style={styles.title}>Upcoming</Text>
    </View>
  ));

  const RenderItem = useCallback(({ item }) => <MovieCard type="vertical" movie={item} />, []);
  const RenderEmptyComponent = memo(() => <VerticalMovieSkeleton />);

  return (
    <>
      <RenderUpcomingHeader />
      <FlatList
        horizontal
        data={movies}
        key="popular-movies"
        renderItem={RenderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={RenderEmptyComponent}
        contentContainerStyle={styles.contentContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: 'rgba(17, 14, 71, 1)',
  },
});

export default UpcomingMovieList;

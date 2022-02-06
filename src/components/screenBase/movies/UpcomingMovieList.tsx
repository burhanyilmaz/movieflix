import React, { memo, useCallback } from 'react';
import MovieCard from 'components/screenBase/movies/MovieCard';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Genre, Movie } from 'store/types/MovieModelTypes';
import TestIds from 'helpers/TestIds';
import { HorizontalMovieSkeleton } from './Skeletons';

type UpcomingMoviesProps = {
  movies: Movie[];
  genres: Genre[];
  onPressMovie: (movie: Movie, genres: Genre[]) => void;
};

const UpcomingMovieList = ({ movies, onPressMovie, genres }: UpcomingMoviesProps) => {
  const keyExtractor = (item: Movie) => item.id.toString();

  const RenderUpcomingHeader = memo(() => (
    <View style={styles.header}>
      <Text style={styles.title}>Upcoming</Text>
    </View>
  ));

  const processGenres = useCallback(
    (genre_ids) => genres?.filter((genre) => genre_ids.includes(genre.id)),
    [genres],
  );

  const RenderItem = useCallback(
    ({ item }) => (
      <MovieCard
        type="vertical"
        movie={item}
        testID={TestIds.UPCOMING_MOVIE_CARD}
        genres={processGenres(item.genre_ids)}
        onPress={(_movie) => onPressMovie(_movie, processGenres(item.genre_ids))}
      />
    ),
    [],
  );

  const RenderEmptyComponent = useCallback(() => <HorizontalMovieSkeleton />, []);

  return (
    <>
      <RenderUpcomingHeader />
      <FlatList
        horizontal
        data={movies || []}
        key="popular-movies"
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        renderItem={RenderItem}
        keyExtractor={keyExtractor}
        decelerationRate="fast"
        disableIntervalMomentum
        legacyImplementation
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

export default memo(UpcomingMovieList);

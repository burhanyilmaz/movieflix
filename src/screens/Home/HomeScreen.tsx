import React, { memo, useEffect } from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from 'store';
import PopularMovieList from 'components/movies/PopularMovieList';
import UpcomingMovieList from 'components/movies/UpcomingMovieList';
import Spacer from 'components/core/Spacer';

const HomeScreen = () => {
  const { movies, genres, upcomingMovies } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch.movies.getGenres();
    dispatch.movies.getMovies();
    dispatch.movies.getUpcomingMovies();
  }, []);

  const RenderUpcoming = memo(() => (
    <View>
      <Spacer size={StatusBar.currentHeight || 36} />
      <UpcomingMovieList movies={upcomingMovies} />
    </View>
  ));

  const RenderPopular = memo(() => <PopularMovieList movies={movies} genres={genres} />);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.container}>
        <FlatList
          data={[]}
          renderItem={() => null}
          ListFooterComponent={RenderPopular}
          ListHeaderComponent={RenderUpcoming}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
  },
});

export default HomeScreen;

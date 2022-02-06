import React, { memo, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from 'store';
import { VerticalMovieList, UpcomingMovieList, Spacer, VerticalMovieSkeleton } from 'components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeNavigatorParamList } from 'navigators/HomeNavigator';
import { Genre, Movie } from 'store/types/MovieModelTypes';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  const { movies, genres, upcomingMovies } = useSelector((state: RootState) => state.movies);
  const data = useSelector((state: RootState) => state.internetConnection);

  useEffect(() => {
    if (data.status) {
      dispatch.movies.getGenres();
      dispatch.movies.getMovies();
      dispatch.movies.getUpcomingMovies();
    }
  }, [data.status]);

  const navigateToMoviesDetail = (movie: Movie, _genres: Genre[]) => {
    navigation.navigate('MovieDetail', { movie, genres: _genres });
  };

  const RenderUpcoming = useCallback(
    () => (
      <View>
        <Spacer size={StatusBar.currentHeight || 36} />
        <UpcomingMovieList
          genres={genres}
          movies={upcomingMovies}
          onPressMovie={(_movies, _genres) => {
            navigateToMoviesDetail(_movies, _genres);
          }}
        />
      </View>
    ),
    [upcomingMovies.length, genres.length],
  );

  const RenderPopular = useCallback(
    () => (
      <VerticalMovieList
        movies={movies}
        genres={genres}
        RenderEmpty={VerticalMovieSkeleton}
        onPressMovie={(_movies, _genres) => {
          navigateToMoviesDetail(_movies, _genres);
        }}
      />
    ),
    [movies.length, genres.length],
  );

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.container}>
        <FlatList
          data={[]}
          extraData={[]}
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

export default memo(HomeScreen);

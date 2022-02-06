import { NativeStackScreenProps } from '@react-navigation/native-stack';
import EmptyList from 'components/common/EmptyList';
import VerticalMovieList from 'components/movies/VerticalMovieList';
import { FavoriteNavigatorParamList } from 'navigators/FavoriteNavigator';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Genre, Movie } from 'store/types/MovieModelTypes';

type Props = NativeStackScreenProps<FavoriteNavigatorParamList, 'Favorite'>;

const FavoriteScreen = ({ navigation }: Props) => {
  const favoriteMovies = useSelector((state: RootState) => state.storedData.favoriteMovies);
  const genres = useSelector((state: RootState) => state.movies.genres);

  const navigateToMoviesDetail = (movie: Movie, _genres: Genre[]) => {
    navigation.navigate('MovieDetail', { movie, genres: _genres });
  };

  const RenderEmpty = useCallback(
    () => (
      <EmptyList
        show
        title="There is no favorite movies"
        subtitle="Favorite a movie to add it to this list"
      />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <VerticalMovieList
          title="Favorite Movies"
          genres={genres || []}
          RenderEmpty={RenderEmpty}
          movies={favoriteMovies || []}
          onPressMovie={navigateToMoviesDetail}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'white',
  },
  container: {
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 16,
  },
});

export default FavoriteScreen;

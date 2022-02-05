import React, { memo, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Spacer from 'components/core/Spacer';
import CastList from 'components/movieDetails/CastList';
import GenreList from 'components/movieDetails/GenreList';
import MovieInfoItem from 'components/movieDetails/MovieInfoItem';
import MovieHeader from 'components/movieDetails/MovieHeader';
import IMDbRating from 'components/movies/IMDbRating';
import { Endpoints } from 'helpers/constants';
import { HomeNavigatorParamList } from 'navigators/HomeNavigator';
import { View, Text, StatusBar, StyleSheet, FlatList, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from 'store';
import { Icons } from 'components/core/icons';

type Props = NativeStackScreenProps<HomeNavigatorParamList, 'MovieDetail'>;

const MovieDetails = ({
  navigation,
  route: {
    params: { genres, movie },
  },
}: Props) => {
  const { title, vote_average, backdrop_path, overview, id, release_date, vote_count } = movie;
  const cast = useSelector((state: RootState) => state.movies.selectedMovieCast);

  useEffect(() => {
    dispatch.movies.getCast(id);

    return () => {
      dispatch.movies.setSelectedMovieCast([]);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <MovieHeader image={Endpoints.image(backdrop_path)} goBack={() => navigation.pop(1)} />
      <View style={styles.whiteArea} />
      <FlatList
        data={[]}
        renderItem={() => null}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={memo(() => (
          <View style={styles.subContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.movieTitle}>{title}</Text>
              <Pressable>
                <Icons.Favorite color="#9C9C9C" />
              </Pressable>
            </View>
            <IMDbRating rating={vote_average} />
            <GenreList genres={genres} />
            <View style={styles.movieInfoContainer}>
              <MovieInfoItem label="Language" value="English" />
              <MovieInfoItem
                label="Release Date"
                value={new Date(release_date).getFullYear().toString()}
              />
              <MovieInfoItem label="Vote Count" value={vote_count.toString()} />
            </View>
            <Spacer size={16} />
            <Text style={styles.title}>Overview</Text>
            <Text style={styles.value}>{overview}</Text>
            <Spacer size={16} />
            <Text style={styles.title}>Cast</Text>
            <Spacer size={8} />
            <CastList cast={cast} />
          </View>
        ))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  whiteArea: {
    height: 20,
    width: '100%',
    marginTop: 290,
    position: 'absolute',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
  subContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  movieTitle: {
    fontSize: 20,
    maxWidth: 200,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
  },
  value: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 18,
    color: '#9C9C9C',
  },
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
  },
});

export default MovieDetails;

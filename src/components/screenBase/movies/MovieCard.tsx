import React, { useCallback } from 'react';
import Spacer from 'components/core/Spacer';
import Poster from 'components/screenBase/movies/Poster';
import { Endpoints } from 'helpers/constants';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Genre, Movie } from 'store/types/MovieModelTypes';
import Chip from 'components/core/Chip';
import TestIds from 'helpers/TestIds';
import IMDbRating from './IMDbRating';

type MovieCardProps = {
  movie: Movie;
  genres: Genre[];
  testID?: string;
  type?: 'vertical' | 'horizontal';
  onPress: (movie: Movie, genres?: Genre[]) => void;
};

const MovieCard = ({ movie, type = 'horizontal', genres, testID, onPress }: MovieCardProps) => {
  const { title, poster_path, vote_average, release_date } = movie;
  const posterUrl = useCallback(() => Endpoints.image(poster_path), [poster_path]);

  const handlePress = () => {
    if (onPress) {
      onPress(movie, genres);
    }
  };

  return (
    <TouchableOpacity
      testID={testID}
      style={styles[type]}
      activeOpacity={0.6}
      onPress={handlePress}
    >
      <Poster image={posterUrl()} size={type === 'horizontal' ? 'default' : 'medium'} />
      <View style={{ marginLeft: type === 'horizontal' ? 10 : 0 }}>
        <Text style={{ ...styles.title, marginTop: type === 'vertical' ? 12 : 0 }}>{title}</Text>
        <IMDbRating rating={vote_average} />
        {type === 'horizontal' && (
          <>
            <FlatList
              data={genres}
              numColumns={3}
              key="genre-ids"
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{ marginRight: 3, marginBottom: 4 }} testID={TestIds.MOVIE_GENRES}>
                  <Chip label={item.name} />
                </View>
              )}
            />
            <Spacer size={4} />
          </>
        )}
      </View>
      <View style={styles.releaseDateContainer}>
        <Text testID={TestIds.MOVIE_YEAR} style={styles.releaseDate}>
          {new Date(release_date).getFullYear()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    marginBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  vertical: {
    marginRight: 10,
    flexDirection: 'column',
  },
  releaseDateContainer: {
    position: 'absolute',
    backgroundColor: 'crimson',
    borderRadius: 5,
    paddingHorizontal: 4,
    top: 8,
    left: 8,
    padding: 2,
  },
  releaseDate: {
    fontSize: 12,
    lineHeight: 16,
    color: 'white',
    fontWeight: '700',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    lineHeight: 17,
    color: '#9C9C9C',
    fontWeight: '400',
    marginLeft: 4,
  },
  title: {
    fontSize: 15,
    maxWidth: 145,
    color: 'black',
    marginBottom: 8,
    fontWeight: '700',
  },
});

export default MovieCard;

import React from 'react';
import Spacer from 'components/core/Spacer';
import Poster from 'components/movies/Poster';
import { Endpoints } from 'helpers/constants';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Genre, Movie } from 'stores/types/MovieModelTypes';
import Chip from 'components/core/Chip';
import { Star } from 'components/core/icons';
import TestIds from 'helpers/TestIds';

type MovieCardProps = {
  movie: Movie;
  testID?: string;
  genres?: Genre[];
  type?: 'vertical' | 'horizontal';
};

const MovieCard = ({ movie, type = 'horizontal', genres, testID }: MovieCardProps) => {
  const { title, poster_path, vote_average, release_date } = movie;

  return (
    <View style={styles[type]} testID={testID}>
      <Poster
        image={Endpoints.image(poster_path)}
        size={type === 'horizontal' ? 'default' : 'medium'}
      />
      <View style={{ marginLeft: type === 'horizontal' ? 10 : 0 }}>
        <Text style={{ ...styles.title, marginTop: type === 'vertical' ? 12 : 0 }}>{title}</Text>
        <View style={styles.ratingContainer}>
          <Star testID={TestIds.MOVIE_RATING_STAR} />
          <Text style={styles.rating}>{`${vote_average}/10 IMDb`}</Text>
        </View>
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
    </View>
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

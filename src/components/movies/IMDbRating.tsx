import React from 'react';
import { Star } from 'components/core/icons';
import TestIds from 'helpers/TestIds';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  rating: number;
};

const IMDbRating = ({ rating }: Props) => {
  return (
    <View style={styles.ratingContainer}>
      <Star testID={TestIds.MOVIE_RATING_STAR} />
      <Text style={styles.rating}>{`${rating}/10 IMDb`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default IMDbRating;

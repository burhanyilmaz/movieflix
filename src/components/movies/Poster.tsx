import React from 'react';
import { Image, StyleSheet } from 'react-native';

type PosterProps = {
  image: string;
  size?: 'default' | 'medium';
};

const Poster = ({ image, size = 'default' }: PosterProps) => (
  <Image source={{ uri: image }} style={styles[size]} />
);

const styles = StyleSheet.create({
  default: {
    width: 120,
    height: 170,
    borderRadius: 8,
  },
  medium: {
    width: 150,
    height: 230,
    borderRadius: 12,
  },
});

export default Poster;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  value: string;
  label: string;
};

const MovieInfoItem = ({ label, value }: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    lineHeight: 17,
    color: '#9c9c9c',
    fontWeight: '400',
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    lineHeight: 17,
    color: 'black',
    fontWeight: '600',
  },
});

export default MovieInfoItem;

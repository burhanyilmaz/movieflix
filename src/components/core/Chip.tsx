import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
};

const Chip = ({ label }: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 30,
    minWidth: 75,
    borderRadius: 100,
    alignItems: 'center',
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#DBE3FF',
  },
  label: {
    fontSize: 10,
    color: '#88A4E8',
    fontWeight: '700',
  },
});

export default Chip;

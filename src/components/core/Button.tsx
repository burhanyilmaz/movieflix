import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'crimson',
  },
  title: {
    color: 'white',
  },
});

export default Button;

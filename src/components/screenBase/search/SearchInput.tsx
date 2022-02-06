import SearchIcon from 'components/core/icons/SearchIcon';
import TestIds from 'helpers/TestIds';
import React from 'react';
import { ActivityIndicator, StyleSheet, TextInput, View } from 'react-native';

type Props = {
  value: string;
  isLoading?: boolean;
  onChange: (text: string) => void;
};

const SearchInput = ({ onChange, value, isLoading }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        value={value}
        style={styles.input}
        onChangeText={onChange}
        placeholder="Scarface etc."
        testID={TestIds.SEARCH_INPUT}
      />
      <View style={styles.icon}>
        {!isLoading && <SearchIcon color="#5f6367" testID={TestIds.MAGNIFYING_GLASS} />}
        {isLoading && <ActivityIndicator color="#88A4E8" testID={TestIds.SEARCH_INPUT_LOADING} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#f0f3f4',
    paddingVertical: 12,
    paddingLeft: 32,
    borderRadius: 4,
    height: 48,
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    left: 8,
  },
});

export default SearchInput;

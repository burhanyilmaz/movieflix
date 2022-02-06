import React from 'react';
import Chip from 'components/core/Chip';
import { FlatList, View } from 'react-native';
import { Genre } from 'store/types/MovieModelTypes';

const GenreList = ({ genres }: { genres: Genre[] }) => {
  return (
    <FlatList
      data={genres}
      numColumns={4}
      key="genre-ids"
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ marginRight: 3, marginBottom: 4 }}>
          <Chip label={item.name} />
        </View>
      )}
    />
  );
};

export default GenreList;

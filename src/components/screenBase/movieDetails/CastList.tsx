import React, { memo } from 'react';
import { CastSkeleton } from 'components/screenBase/movies/Skeletons';
import { Endpoints } from 'helpers/constants';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from 'store/types/MovieModelTypes';

const CastList = ({ cast }: { cast: Cast[] }) => {
  return (
    <FlatList
      horizontal
      key="cast"
      data={cast}
      ListEmptyComponent={CastSkeleton}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        const { profile_path, original_name } = item;

        return (
          <View>
            <Image
              source={{
                uri: profile_path
                  ? Endpoints.image(profile_path)
                  : 'https://themefam.com/wp-content/uploads/2019/09/no-image-baby.png',
              }}
              style={styles.castImage}
            />
            <Text style={styles.castName}>{original_name}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  castImage: {
    height: 150,
    width: 100,
    marginRight: 8,
    borderRadius: 8,
  },
  castName: {
    fontSize: 13,
    color: 'black',
    fontWeight: '400',
    maxWidth: 100,
    marginTop: 8,
  },
});

export default memo(CastList);

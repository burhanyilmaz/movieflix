import React from 'react';
import { Back } from 'components/core/icons';
import {
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import TestIds from 'helpers/TestIds';

const MovieHeader = ({ image, goBack }: { image: string; goBack: () => void }) => {
  return (
    <ImageBackground source={{ uri: image }} style={styles.bg} resizeMode="cover">
      <View style={styles.overlay} />
      <SafeAreaView>
        <Pressable
          testID={TestIds.GO_BACK_BUTTON}
          style={{
            paddingHorizontal: 16,
            paddingTop: 24 + (Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0)!,
          }}
          hitSlop={{ top: 24, right: 24, left: 24, bottom: 24 }}
          onPress={goBack}
        >
          <Back color="white" />
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    height: 300,
  },
  overlay: {
    height: 300,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
});

export default MovieHeader;

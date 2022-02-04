import React from 'react';
import Button from 'components/core/Button';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Movieflix</Text>
      <Button title="HelloMovieflix App" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default App;

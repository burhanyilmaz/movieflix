import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import HomeScreen from 'screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

const CommonOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={CommonOptions} />
  </Stack.Navigator>
);

export default MainNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={CommonOptions} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;

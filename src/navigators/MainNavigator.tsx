import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from 'screens/Test/TestScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Test" component={TestScreen} options={{ title: 'Test Screen' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;

import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { getBottomBarOptions } from 'utils';
import { TabBarIcons } from 'components/core/icons';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import useNetInfo from 'hooks/useNetInfo';
import RNBootSplash from 'react-native-bootsplash';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import FavoriteNavigator from './FavoriteNavigator';

export type MainNavigatorParamList = {
  HomeNavigator: undefined;
  SearchNavigator: undefined;
  FavoriteNavigator: undefined;
};

const Tab = createBottomTabNavigator<MainNavigatorParamList>();

const MainNavigator = () => {
  useNetInfo(Toast);

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <View style={{ height: '100%', backgroundColor: 'white', zIndex: 10, position: 'relative' }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeNavigator"
            component={HomeNavigator}
            options={getBottomBarOptions({ title: 'Home', Icon: TabBarIcons.Home })}
          />
          <Tab.Screen
            name="SearchNavigator"
            component={SearchNavigator}
            options={getBottomBarOptions({ title: 'Search', Icon: TabBarIcons.Search })}
          />
          <Tab.Screen
            name="FavoriteNavigator"
            component={FavoriteNavigator}
            options={getBottomBarOptions({ title: 'Starred', Icon: TabBarIcons.Favorite })}
          />
        </Tab.Navigator>
        <Toast />
      </NavigationContainer>
    </View>
  );
};

export default MainNavigator;

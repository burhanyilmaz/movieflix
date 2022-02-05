import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { getBottomBarOptions } from 'utils';
import { TabBarIcons } from 'components/core/icons';
import HomeNavigator from './HomeNavigator';

export type MainNavigatorParamList = {
  HomeNavigator: undefined;
  SearchNavigator: undefined;
  StarredNavigator: undefined;
};

const Tab = createBottomTabNavigator<MainNavigatorParamList>();

const MainNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={getBottomBarOptions({ title: 'Home', Icon: TabBarIcons.Home })}
      />
      <Tab.Screen
        name="SearchNavigator"
        component={HomeNavigator}
        options={getBottomBarOptions({ title: 'Search', Icon: TabBarIcons.Search })}
      />
      <Tab.Screen
        name="StarredNavigator"
        component={HomeNavigator}
        options={getBottomBarOptions({ title: 'Starred', Icon: TabBarIcons.Favorite })}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default MainNavigator;

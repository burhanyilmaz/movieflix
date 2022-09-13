import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export const getBottomBarOptions = ({ title, Icon }: { title: string; Icon: any }) =>
  ({
    headerShown: false,
    title,
    tabBarLabelStyle: {
      fontSize: 12,
    },
    lazy: true,
    tabBarShowLabel: false,
    tabBarIcon: (props) => <Icon {...props} />,
  } as BottomTabNavigationOptions);

export default {};

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomNav} from '../components';
import {HomeScreen} from '../screens';

type RootStackParamList = {
  Home2: {title: string};
  Home3: {title: string};
  Home4: {title: string};
  Home5: {title: string};
  Home: {title: string};
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNav {...props} />}>
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{title: 'home'}}
      />
      <Tab.Screen
        name="Home3"
        component={HomeScreen}
        options={{title: 'userGroup'}}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'plus'}}
      />
      <Tab.Screen
        name="Home4"
        component={HomeScreen}
        options={{title: 'stack'}}
      />
      <Tab.Screen
        name="Home5"
        component={HomeScreen}
        options={{title: 'bell'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

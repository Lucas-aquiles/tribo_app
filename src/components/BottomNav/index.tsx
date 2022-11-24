import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './styles.sass';
import {icons} from './constants';

type IconTypes = 'plus' | 'home' | 'userGroup' | 'stack' | 'bell';

export interface IconType {
  plus: JSX.Element;
  home: JSX.Element;
  userGroup: JSX.Element;
  stack: JSX.Element;
  bell: JSX.Element;
}

const BottomNav = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title as IconTypes;

        const icono: JSX.Element = icons[label];
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabBar}
            key={route.key}>
            <View style={isFocused ? styles.iconFocused : styles.iconUnfocused}>
              {icono}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;

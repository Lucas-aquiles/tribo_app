import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreenS from '../screens/SplashScreen';
import StackNavigation from './StackNavigation';

const NavContainer = () => {
  SplashScreenS();

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default NavContainer;

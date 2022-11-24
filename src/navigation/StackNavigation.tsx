import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {StartScreen, CountEmail} from '../screens';
import BottomTabNavigation from './BottomTabNavigation';
import type {RootState} from '../redux/store';

type RootStackParamList = {
  StartScreen: undefined;
  HomeNavigation: undefined;
  CountEmail: undefined;
  Publicar: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'StartScreen'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  const credentials = useSelector((state: RootState) => state.user.navigation);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {credentials ? (
        <Stack.Screen name="HomeNavigation" component={BottomTabNavigation} />
      ) : (
        <>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="CountEmail" component={CountEmail} />
        
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

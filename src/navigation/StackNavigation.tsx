import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {StartScreen, CountEmail,VeriFyAcount,VerifyEmail,Publish,PublishScreen,PublishPhotoScreen} from '../screens';
import BottomTabNavigation from './BottomTabNavigation';
import type {RootState} from '../redux/store';

type RootStackParamList = {
  StartScreen: undefined;
  HomeNavigation: undefined;
  CountEmail: undefined;
  VeriFyAcount:undefined;
  VerifyEmail:undefined;
  Publish:undefined;
  PublishScreen:undefined;
  PublishPhotoScreen:undefined;
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
          <Stack.Screen name="VeriFyAcount" component={VeriFyAcount} />
          <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
          <Stack.Screen name="PublishScreen" component={PublishScreen} />
          <Stack.Screen name="PublishPhotoScreen" component={PublishPhotoScreen} />
          <Stack.Screen name="Publish" component={Publish} />

        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

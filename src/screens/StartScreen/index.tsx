import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {Props} from '../../navigation/StackNavigation';
import {useDispatch} from 'react-redux';

import {ButtonComponent} from '../../components';
import styles from './styles.sass';
import {navigate} from '../../redux/slices/userSlice';

const StartScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  return (
    <ImageBackground
      source={require('../../assets/images/StartScreen/bg-start-screen.png')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/images/StartScreen/Logo.png')}
            style={styles.logo}
          />
        </View>
        <View>
          <Image
            source={require('../../assets/images/StartScreen/Frame.png')}
            style={styles.family}
          />
        </View>
        <ButtonComponent
          txtBtn="Inicia sesión"
          style={styles.button}
          onPress={() => navigation.navigate('PublishScreen')}
        />

        <View>
          <Text style={styles.info}>¿Aún no tienes cuenta?</Text>
          <Text
            style={[styles.info, styles.sign]}
            onPress={() => navigation.navigate('CountEmail')}>
            CREA TU CUENTA
          </Text>
        </View>
        <Text
          style={[styles.info, styles.guest]}
          onPress={() => dispatch(navigate(true))}>
          Explora como invitado
        </Text>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;

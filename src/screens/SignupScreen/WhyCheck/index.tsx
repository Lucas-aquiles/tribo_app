import {SafeAreaView, View, Text, Button, StatusBar} from 'react-native';
import React from 'react';
import styleWhyCheck from './styleWhyCheck.sass';
import MyButton from '../../../components/Button';

const WhyCheck = () => {
  return (
    <SafeAreaView style={styleWhyCheck.containerPpal}>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <View style={styleWhyCheck.containerTitle}>
        <Text style={styleWhyCheck.txtTitle}>¿Por qué debo</Text>
        <Text style={styleWhyCheck.txtTitle}>verificar mi dirección</Text>
        <Text style={styleWhyCheck.txtTitle}>y cargar mi</Text>
        <Text style={styleWhyCheck.txtTitle}>identificación?</Text>
      </View>
      <View style={styleWhyCheck.txtContainerDescription}>
        <Text style={styleWhyCheck.txtDescription}>
          Verificar tu identidad a través de documentos oficiales permite que la
          experiencia de tribo sea segura....
        </Text>
        <View style={styleWhyCheck.marginTopDescription}>
          <Text style={styleWhyCheck.txtDescription}>
            Copy acerca de los beneficios de la verificación y porque la app
            pide estos datos.
          </Text>
        </View>
        <View style={styleWhyCheck.marginTopDescription}>
          <Text style={styleWhyCheck.txtDescription}>
            Verificar tu identidad a través de documentos oficiales permite que
            la experiencia de tribo sea segura....
          </Text>
        </View>
        <View style={styleWhyCheck.marginTopDescription}>
          <Text style={styleWhyCheck.txtDescription}>
            Copy acerca de los beneficios de la verificación y porque la app
            pide estos datos.
          </Text>
        </View>
        <View style={styleWhyCheck.marginTopDescription}>
          {/* <Button title="Verificar mi dirección" /> */}
          <MyButton
            txtBtn="Verificar mi dirección"
            onPress={() => alert('PRESS')}
          />
        </View>
        <View style={styleWhyCheck.marginTopDescription}>
          <Text style={styleWhyCheck.skipChek}>Omitir verificación</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WhyCheck;

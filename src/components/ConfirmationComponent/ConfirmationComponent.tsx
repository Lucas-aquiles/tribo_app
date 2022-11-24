import {Text, View, TextInput, TouchableHighlight, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Appstyles from './ConfirmationComponent.sass';
import ButtonInterface from '../Button';

interface ConfirmationInterface {
  title: string;
  explanation: string;
  btnText: string;
  optionText: string;
  onPress: Function;
}

const ConfirmationComponent = ({
  title,
  explanation,
  btnText,
  optionText,
  onPress,
}: ConfirmationInterface) => {
  return (
    <View style={Appstyles.ConfirmationComponentBody}>
      <View style={Appstyles.ConfirmationComponentBody_Line}></View>
      <Text style={Appstyles.ConfirmationComponentBody_Title}>{title}</Text>
      <Text style={Appstyles.ConfirmationComponentBody_Subtitle}>
        {explanation}
      </Text>
      <ButtonInterface
        txtBtn="Verificar mi dirección"
        onPress={() => onPress()}
      />
      <TouchableHighlight>
        <Text style={Appstyles.ConfirmationComponentBody_Option_Text}>
          {optionText}
        </Text>
      </TouchableHighlight>
    </View>
  );
};
export default ConfirmationComponent;

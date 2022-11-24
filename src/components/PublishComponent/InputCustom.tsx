import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import stylesInput from './InputCustom.sass';
import {TypeInput} from './interface';


export const InputCustom = ({
  label,
  value,
  onChange,
  multiline,
  editable,
}: TypeInput) => {
  return (
    <>
      <View style={stylesInput.Container}>
        <Text
          style={[
            stylesInput.TitleText,
            label === 'Descripción' && {
              alignSelf: 'flex-start',
              marginTop: 10,
            },
          ]}>
          {label}
        </Text>
        <TextInput
          style={[
            stylesInput.InputContainer,
            label === 'Descripción' && {
              justifyContent: 'flex-start',
              textAlignVertical: 'top',
            },
          ]}
          onChangeText={onChange}
          value={value}
          multiline={multiline}
          numberOfLines={label === 'Descripción' ? 4 : 1}
          editable={editable}
        />
      </View>
      <View
        style={{
          borderBottomColor: '#24273A',
          borderBottomWidth: StyleSheet.hairlineWidth,
          opacity: 0.3,
          marginHorizontal: 8,
        }}></View>
    </>
  );
};

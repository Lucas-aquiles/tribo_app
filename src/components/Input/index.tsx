import React from 'react';
import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CheckIcon} from 'react-native-heroicons/solid';

import styleMyInput from './styles.sass';
import {InputInterface} from './interface';

const InputText = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  value,
  onChangeText,
  status,
  check,
}: InputInterface) => {
  const validated = status ? '#219653' : 'rgba(3, 25, 37, 0.5)';
  return (
    <SafeAreaView style={[styleMyInput.container, style]}>
      <TextInput
        placeholderTextColor={'rgba(3, 25, 37, 0.5)'}
        style={[styleMyInput.text]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
      {check && <CheckIcon color={validated} size={22} />}
    </SafeAreaView>
  );
};

export default InputText;

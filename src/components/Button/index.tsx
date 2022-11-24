import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles.sass';
import {ButtonInterface} from './interface';

const ButtonComponent = ({style, txtBtn, onPress}: ButtonInterface) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.container, style]}>
      <Text style={[styles.txt]}>{txtBtn}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

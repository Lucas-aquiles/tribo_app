import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import styles from './styles.sass';

export interface tagProps {
  tagId: number;
  tagName: string;
}

const TagItem = ({tagId, tagName}: tagProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={isPressed ? styles.itemSelected : styles.item}
        activeOpacity={0.8}>
        <Text key={tagId} style={isPressed ? styles.textSelected : styles.text}>
          {tagName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TagItem;

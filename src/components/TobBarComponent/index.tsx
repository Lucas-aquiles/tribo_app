import {View, Text, Image, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import {ChatBubbleLeftIcon} from 'react-native-heroicons/solid';
import styles from './styles.sass';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline';

interface Props {
  profileImage?: string;
  location?: string;
}

const url = 'https://st2.depositphotos.com/4071389/7861/i/450/depositphotos_78618000-stock-photo-woman-drinking-coffee.jpg'
const currentLocation = 'Col. Atlas, Colima'

const TobBarComponent = ({profileImage=url, location=currentLocation}: Props) => {
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
      <Image
        source={{
          uri: profileImage
        }}
        style={styles.Image}
      />
      <View style={{height:40}}>

      <View style={styles.midleContainer}>
        <MagnifyingGlassIcon  color="black" />
        <TextInput
          placeholder={location}
          placeholderTextColor="black"
          style={styles.textInput}
          />

        <AdjustmentsHorizontalIcon  color="black" />
      </View>

          </View>
      <View style={styles.Messages}>
        <ChatBubbleLeftIcon color="white" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default TobBarComponent;

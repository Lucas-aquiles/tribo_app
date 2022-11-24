import React, {useState, useEffect} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {ChevronDownIcon} from 'react-native-heroicons/outline';
import stylesPicker from './ModalPicker.sass';
import {TypePicker} from './interface';

const ModalPicker = ({title, textOne, textTwo, onChange, name}: TypePicker) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textTitle, setTextTitle] = useState('');

  useEffect(() => {
    onChange(name, textTitle);
  }, [textTitle]);

  return (
    <>
      <View style={stylesPicker.CenteredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={stylesPicker.CenteredView}>
            <View style={stylesPicker.ModalView}>
              <Pressable
                style={stylesPicker.Button}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setTextTitle(textOne);
                }}>
                <Text style={stylesPicker.ModalText}>{textOne}</Text>
              </Pressable>
              <Pressable
                style={stylesPicker.Button}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setTextTitle(textTwo);
                }}>
                <Text style={[stylesPicker.TextStyle, {textAlign: 'center'}]}>
                  {textTwo}
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={[stylesPicker.TextStyle, {width: '30%', paddingLeft: 14}]}>
          {title}
        </Text>
        <Pressable
          style={[
            stylesPicker.Button,
            {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}
          onPress={() => setModalVisible(true)}>
          <Text
            style={[stylesPicker.TextStyle, {color: 'black', marginLeft: -11}]}>
            {textTitle}
          </Text>
          <ChevronDownIcon color={'black'} />
        </Pressable>
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

export default ModalPicker;

import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import styles from './styles.sass';
import ButtonComponent from '../Button';

interface modalType {
  warningType: 'guest' | 'verification' | 'share' | 'gallery';
}

type modalTypeProps = {
  title?: string;
  content: string;
  buttonText: string;
  continueButton: string;
};

const GuestWarning = (warningType: modalType) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);

  const galleryWarning: modalTypeProps = {
    content:
      'La experiencia de TRIBO no esta completa si no aún no estas registrado. Te invitamos a crear tu cuenta para ver la galería de imágenes completa de este evento.',
    buttonText: 'Crea tu cuenta',
    continueButton: 'Continua explorando como invitado',
  };
  const verificationWarning: modalTypeProps = {
    title: 'Si omites la verificación de tu dirección',
    content:
      'La experiencia de TRIBO no será completa. No podrás contactar a tus vecinos ni chatear en grupos de tu vecindario, no podras publicar de manera anónima ni comentar en los eventos ocurridos en tu comunidad.',
    buttonText: 'Verificar mi direccion',
    continueButton: 'Omitir verificacion',
  };
  const shareWarning: modalTypeProps = {
    title: 'No puedes comentar ni compartir como invitado',
    content:
      'La experiencia de TRIBO no esta completa si no aún no estas registrado. Te invitamos a crear tu cuenta para ver la galería de imágenes completa de este evento.',
    buttonText: 'Crea tu cuenta',
    continueButton: 'Continua explorando como invitado',
  };
  const guestWarning: modalTypeProps = {
    content:
      'La experiencia de TRIBO no esta completa si no aún no estas registrado. Te invitamos a crear tu cuenta para que puedas ver todo el contenido, recibir notificaciones, comentar y compartir publicaciones.',
    buttonText: 'Crea tu cuenta',
    continueButton: 'Continua explorando como invitado',
  };

  let currentOption = guestWarning;

  switch (warningType.warningType) {
    case 'verification':
      currentOption = verificationWarning;
      break;
    case 'share':
      currentOption = shareWarning;
      break;
    case 'gallery':
      currentOption = galleryWarning;
      break;
    case 'guest':
      currentOption = guestWarning;
      break;
    default:
      currentOption = guestWarning;
      break;
  }

  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View
          style={
            warningType.warningType === 'guest' ||
            warningType.warningType === 'gallery'
              ? styles.defaultTypeModalStyle
              : styles.modalStyle
          }>
          <TouchableOpacity
            style={styles.whiteLine}
            onPress={() => setModalVisible(!modalVisible)}
          />
          <Text style={styles.titleStyle}>{currentOption.title}</Text>
          <Text style={styles.textInsideModal}>{currentOption.content}</Text>
          <View style={styles.buttonsContainer}>
            <ButtonComponent
              txtBtn={currentOption.buttonText}
              onPress={() => console.log(currentOption.buttonText)}
            />
            <TouchableOpacity
              onPress={() => console.log(currentOption.continueButton)}>
              <Text style={styles.guestPressable}>
                {currentOption.continueButton}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GuestWarning;

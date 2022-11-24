import {View, ToastAndroid} from 'react-native';
import React from 'react';
import {ImageGallery, ImageObject} from '@georstat/react-native-image-gallery';

interface GalleryProps {
  images: ImageObject[];
  isOpen: boolean;
  close: Function;
}

const GalleryComponent = ({images, isOpen, close}: GalleryProps) => {
  if (isOpen) {
    ToastAndroid.show('Desliza hacia abajo para salir', ToastAndroid.SHORT);
  }

  return (
    <View>
      <ImageGallery
        close={() => close()}
        isOpen={isOpen}
        images={images}
        resizeMode={'cover'}
      />
    </View>
  );
};

export default GalleryComponent;

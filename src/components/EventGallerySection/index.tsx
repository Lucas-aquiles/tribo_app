import {Text, View, Image} from 'react-native';
import React from 'react';

import GalleryStyles from './styles.sass';

interface ImagesProps {
  urls: string[];
}

const EventGallerySection = (urls: ImagesProps) => {
  const images = urls.urls;

  switch (images.length) {
    case 1:
      return (
        <View>
          <Image style={GalleryStyles.img} source={{uri: images[0]}} />
        </View>
      );

    case 2:
      return (
        <View style={GalleryStyles.containerLayout}>
          <View style={GalleryStyles.twoImgsLayoutWidth}>
            <Image style={GalleryStyles.img} source={{uri: images[0]}} />
          </View>
          <View style={GalleryStyles.twoImgsLayoutWidth}>
            <Image style={GalleryStyles.img} source={{uri: images[1]}} />
          </View>
        </View>
      );

    case 3:
      return (
        <View style={GalleryStyles.containerLayout}>
          <View style={GalleryStyles.leftImgWidth}>
            <Image style={GalleryStyles.img} source={{uri: images[0]}} />
          </View>
          <View style={GalleryStyles.rightSection}>
            <View style={GalleryStyles.height47}>
              <Image style={GalleryStyles.img} source={{uri: images[1]}} />
            </View>
            <View style={GalleryStyles.height48}>
              <Image style={GalleryStyles.img} source={{uri: images[2]}} />
            </View>
          </View>
        </View>
      );

    case 4:
      return (
        <View style={GalleryStyles.containerLayout}>
          <View style={GalleryStyles.leftImgWidth}>
            <Image style={GalleryStyles.img} source={{uri: images[0]}} />
          </View>
          <View style={GalleryStyles.rightSection}>
            <View style={GalleryStyles.height47}>
              <Image style={GalleryStyles.img} source={{uri: images[1]}} />
            </View>
            <View style={GalleryStyles.leftImg}>
              <View style={GalleryStyles.width48}>
                <Image style={GalleryStyles.img} source={{uri: images[2]}} />
              </View>
              <View style={GalleryStyles.width48}>
                <Image style={GalleryStyles.img} source={{uri: images[3]}} />
              </View>
            </View>
          </View>
        </View>
      );

    case 0:
      return (
        <View style={GalleryStyles.alignCenter}>
          <Text>No se han agregado imagenes ha esta publicacion</Text>
        </View>
      );

    default:
      return (
        <View style={GalleryStyles.containerLayout}>
          <View style={GalleryStyles.leftImgWidth}>
            <Image style={GalleryStyles.img} source={{uri: images[0]}} />
          </View>
          <View style={GalleryStyles.rightSection}>
            <View style={GalleryStyles.height47}>
              <Image style={GalleryStyles.img} source={{uri: images[1]}} />
            </View>
            <View style={GalleryStyles.leftImg}>
              <View style={GalleryStyles.width48}>
                <Image style={GalleryStyles.img} source={{uri: images[2]}} />
              </View>
              <View style={GalleryStyles.numberSection}>
                <Text style={GalleryStyles.numberFont}>
                  {images.length - 3}+
                </Text>

                <Image
                  style={GalleryStyles.lastImg}
                  source={{uri: images[3]}}
                />
              </View>
            </View>
          </View>
        </View>
      );
  }
};

export default EventGallerySection;

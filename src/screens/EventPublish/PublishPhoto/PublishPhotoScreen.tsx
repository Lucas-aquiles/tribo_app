import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Appstyles from './PublishPhotoStyle.sass';
import ImagePicker from 'react-native-image-crop-picker';


const PublishPhotoScreen = ({navigation}) => {
  const [photo, setPhoto] = useState<string|undefined>(undefined);
  const {width, height} = useWindowDimensions();
  

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(photo => {
      setPhoto(photo.path);
    });
    navigation.navigate('Publish')
  };
  
  const selectImgFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 1,
    }).then(photo => {
      setPhoto(photo.path);
    });
  };

  return (
    
    <View style={Appstyles.screen}>
      <ImageBackground
      style={[StyleSheet.absoluteFill,{width:width, height:height, backgroundColor:'#a39f9f'}]}
        source={{uri: photo}} resizeMode='contain' 
      />
      <View>
        <TouchableOpacity onPress={selectImgFromGallery}
        style={Appstyles.buttonImg}>
          <Image 
            source={{uri: photo}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={takePhotoFromCamera}>
        <Image
          style={Appstyles.img1}
          source={require('../../../images/publish-photo-screen/backButtonAddPhoto.png')}
        />
        <View style={Appstyles.img2}>
          <Image
            source={require('../../../images/publish-photo-screen/frontButtonAddPhoto.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
    
  );
};

export default PublishPhotoScreen
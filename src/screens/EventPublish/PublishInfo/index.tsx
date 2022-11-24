import {
  View,
  Text,
  StatusBar,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import stylesPublish from './PublishInfo.sass';
import {InputCustom} from '../../../components/PublishComponent/InputCustom';
import {Formik} from 'formik';
import TitleComponent from '../../../components/PublishComponent/TitleComponent';
import ModalPicker from '../../../components/PublishComponent/ModalPicker';
import {ChevronLeftIcon, CameraIcon} from 'react-native-heroicons/outline';
import moment from 'moment';
import {MapComponent, ButtonComponent} from '../../../components';
import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

export default function Publish() {
  const {width, height} = useWindowDimensions();
  let fecha = moment().format('DD MMMM YYYY, h:mm A');
  //Geolocalizacion Telefono
  const [location, setLocation] = useState('');
  useEffect(() => {
    Geolocation.getCurrentPosition(position =>
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }),
    );
  }, []);

  return (
    <ScrollView>
      <StatusBar backgroundColor={'transparent'} translucent />
      <View>
        <Image
          source={require('../../../assets/images/PublishEvent/image1.png')}
          style={{width: width, height: 392}}
        />
        <View style={stylesPublish.DivTitle}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ChevronLeftIcon color={'white'} />
            <Text style={stylesPublish.TextH1}> Regresar</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={stylesPublish.TextH1}>Agregar Imágenes</Text>

            <View style={stylesPublish.DivCamera}>
              <CameraIcon color={'black'} />
            </View>
          </View>
        </View>
        <View style={stylesPublish.DivImage}>
          <Image
            source={require('../../../assets/images/PublishEvent/image2.png')}
            style={{width: 50, height: 50}}
          />
          <Image
            source={require('../../../assets/images/PublishEvent/image3.png')}
            style={{width: 50, height: 50, marginLeft: 5}}
          />
        </View>
      </View>
      <TitleComponent width={width} />
      <Formik
        initialValues={{
          title: '',
          description: '',
          date: fecha,
          visibility: '',
          perfil: '',
          location: '',
        }}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({touched, setFieldValue, handleChange, handleSubmit, values}) => (
          <View>
            <InputCustom
              label="Titulo"
              value={values.title}
              onChange={handleChange('title')}
            />
            <InputCustom
              label="Descripción"
              value={values.description}
              onChange={handleChange('description')}
              multiline={true}
            />
            <InputCustom
              label="Fecha y hora"
              value={fecha}
              editable={false}
              onChange={handleChange('date')}
            />
            <ModalPicker
              title="Visibilidad"
              name="visibility"
              textOne="Publicar para todos"
              textTwo="Publicar para mi Comunidad"
              onChange={setFieldValue}
            />
            <ModalPicker
              title="Perfil"
              name="perfil"
              textOne="Publicar de forma anónima"
              textTwo="Público"
              onChange={setFieldValue}
            />
            <InputCustom
              label="Ubicación"
              value={values.location}
              onChange={handleChange('location')}
            />
            <View
              style={{width: width, height: 240, marginTop: 40, bottom: 34}}>
              <MapComponent />
            </View>
            <ButtonComponent
              txtBtn="Publicar Evento"
              onPress={handleSubmit}
              style={stylesPublish.ButtonAux}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

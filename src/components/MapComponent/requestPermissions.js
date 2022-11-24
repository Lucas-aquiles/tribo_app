import {PermissionsAndroid, Platform} from 'react-native';
export const requestLocationPermissions = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso de geolocalizacion',
          message: 'Tribo desea acceder a su ubicacion',
          buttonNeutral: 'Preguntar Despues',
          buttonNegative: 'Negar',
          buttonPositive: 'Aceptar',
        },
      );
      if (granted === 'granted') {
        // if geolocation permission is granted
        return true;
      } else {
        // if geolocation permission is not granted
        return false;
      }
    } catch (err) {
      return false;
    }
  }
};

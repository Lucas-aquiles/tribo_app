import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenS = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
};

export default SplashScreenS;

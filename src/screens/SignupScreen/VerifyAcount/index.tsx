import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  
} from 'react-native';
import Appstyles from './VerifyAcountStyles.sass';
import ButtonComponent from '../../../components/Button';
import InputText from '../../../components/Input';
import {err} from 'react-native-svg/lib/typescript/xml';

const VeriFyAcount= ({navigation})=> {
  const [code, setCode] = useState('');
  const [verify, setVerify] = useState(false);
  const [errors, setErrors] = useState(false);

  function validate(code: string) {
    if (!code) {
      setErrors(true)
    }
    if(code.length < 6){
        setErrors(true)
    } 
    else {
      setErrors(false);
    }
  }

  function onSubmit() {
    setVerify(verify);
    validate(code);
  }
  return (
    <SafeAreaView style={Appstyles.verifyContainer}>
      <View>
        <Text style={Appstyles.textVerify}>Verifica tu cuenta</Text>
        <View style={Appstyles.imgVerify}>
          <Image
            source={require('../../../images/verify-acount/verify-acount-img.png')}
          />
        </View>
        <View style={Appstyles.codSecutityText}>
          <Text>
            Ingresa el codigo de seguridad que enviamos a 333 333 3333
          </Text>
        </View>
        <View style={Appstyles.codInput}>
          <InputText
            keyboardType="phone-pad"
            placeholder="Codigo de 6 digitos"
            value={code}
            onChangeText={e => setCode(e)}
          />
          {errors ? <Text>Ingresa el codigo de seguridad</Text> : null}
        </View>
        <View style={Appstyles.codButton}>
          <ButtonComponent txtBtn="Verificar codigo"
          //  onPress={onSubmit}
           onPress={() => navigation.navigate('VerifyEmail')}

           />
        </View>
        <View style={Appstyles.codResend}>
          <Text>Reenviar codigo de verificacion</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
  export default VeriFyAcount;

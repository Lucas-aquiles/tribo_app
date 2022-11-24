import {Text, View, TextInput, TouchableHighlight, Image} from 'react-native';
import React, {useState} from 'react';
import Appstyles from './VerifyEmail.sass';
import ConfirmationComponent from '../../../components/ConfirmationComponent/ConfirmationComponent';
import {Formik} from 'formik';
import * as Yup from 'yup';
import InputText from '../../../components/Input';
import ButtonInterface from '../../../components/Button';

const VerifyEmail = () => {
  const [alert, setAlert] = useState(false);
 let cc_data = [
    'Si omites la verificación de tu dirección',
    'La experiencia de TRIBO no será completa. No podrás contactar a tus vecinos ni chatear en grupos de tu vecindario, no podrás publicar de manera anónima ni comentar en los eventos concurridos en tu comunidad.',
    'Verificar mi dirección',
    'Omitir verificación',
  ];

  function AlertPressed() {
    setAlert(!alert);
  }
  
  return (
    <View style={Appstyles.VerifyEmailBody}>
      <Text style={Appstyles.VerifyEmailBody_Title}>Verifica tu dirección</Text>
      <View style={Appstyles.VerifyEmailBody_Header}>
        <Image
          style={Appstyles.VerifyEmailBody_Logo}
          source={require('../../../images/verify-email/LogoTemp.png')}
        />
        <View style={Appstyles.VerifyEmailBody_Header_Right}>
          <Text style={Appstyles.VerifyEmailBody_Header_Right_Text}>
            Ingresa tu dirección y carga una imagen de tu identificación oficial
            o comprobante de domicilio
          </Text>
          <Text style={Appstyles.VerifyEmailBody_Option}>
            ¿Por qué debo hacer esto?
          </Text>
        </View>
      </View>
      <Inputs />
      <TouchableHighlight onPress={() => AlertPressed()}>
        <Text style={Appstyles.VerifyEmailBody_Option}>
          Omitir verificacion
        </Text>
      </TouchableHighlight>
      {alert ? (
        <ConfirmationComponent
          title={cc_data[0]}
          explanation={cc_data[1]}
          btnText={cc_data[2]}
          optionText={cc_data[3]}
          onPress={() => AlertPressed()}
        />
      ) : null}
    </View>
  );
};

const Inputs = () => {
  const [state, setState] = useState<boolean>(false);
  function doThings(){
    console.log("hacer algo")

   }
  const SignupSchema = state
    ? Yup.object().shape({
        string: Yup.string()
          .min(2, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
      })
    : Yup.object().shape({
        string: Yup.string()
          .min(2, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
      });

  return (
    <Formik
      initialValues={{
        street: '',
        suburb: '',
        city: '',
        state: '',
        pc: '',
      }}
      validationSchema={SignupSchema}
      //  onSubmit={values => console.log(values)}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({errors, touched, handleChange, handleSubmit, values}) => (
        <>
          <View style={Appstyles.VerifyEmailBody_inputs}>
            <InputText
              placeholder="Calle y número"
              keyboardType="default"
              onChangeText={handleChange('string')}
              value={values.street}
              style={Appstyles.VerifyEmailBody_inputs_Input}
            />
            {errors.street && touched.street ? (
              <Text>{errors.street}</Text>
            ) : null}

            {state === false && (
              <InputText
                placeholder="Colonia"
                keyboardType="default"
                onChangeText={handleChange('string')}
                value={values.suburb}
                style={Appstyles.VerifyEmailBody_inputs_Input}
              />
            )}
            {state === false && errors.suburb && touched.suburb ? (
              <Text>{errors.suburb}</Text>
            ) : null}

            <InputText
              placeholder="Ciudad"
              keyboardType="default"
              onChangeText={handleChange('string')}
              value={values.city}
              secureTextEntry={true}
              style={Appstyles.VerifyEmailBody_inputs_Input}
            />
            {errors.city && touched.city ? <Text>{errors.city}</Text> : null}

            <InputText
              placeholder="Estado"
              keyboardType="default"
              onChangeText={handleChange('string')}
              value={values.state}
              secureTextEntry={true}
              style={Appstyles.VerifyEmailBody_inputs_Input}
            />
            {errors.state && touched.state ? <Text>{errors.state}</Text> : null}
            <InputText
              placeholder="Codigo Postal"
              keyboardType="default"
              onChangeText={handleChange('string')}
              value={values.pc}
              secureTextEntry={true}
              style={Appstyles.VerifyEmailBody_inputs_Input}
            />
            {errors.pc && touched.pc ? <Text>{errors.pc}</Text> : null}
          </View>
          <ButtonInterface txtBtn="Cargue imagen para verificar" onPress = {doThings}/>
        </>
      )}
    </Formik>
  );
};

export default VerifyEmail;

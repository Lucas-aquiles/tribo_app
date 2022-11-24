import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import stylesCountEmail from './CountEmail.sass';
import {Formik} from 'formik';
import * as Yup from 'yup';
import InputText from '../../../components/Input';
import ButtonComponent from '../../../components/Button';

const CountEmail = () => {
  const [state, setState] = useState<boolean>(false);

  const SignupSchema = state
    ? Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
        password: Yup.string()
          .required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordAux: Yup.string()
          .required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        phone: Yup.number().required('Number required').positive().integer(),
      })
    : Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
          .required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordAux: Yup.string()
          .required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      });

  function changeLink() {
    setState(false);
  }
  function changeLinkOne() {
    setState(true);
  }

  return (
    <KeyboardAvoidingView behavior="height" style={{flex:1}} >
    <View style={stylesCountEmail.Container}>
      <StatusBar
        backgroundColor="#F4F5FA"
        hidden={false}
        barStyle="dark-content"
      />
    {/*  ------------------------------------- */}
      <View>
        <Text style={stylesCountEmail.Text}> Crea tu cuenta</Text>
        <View style={stylesCountEmail.DivChildren}>
          <TouchableOpacity style={stylesCountEmail.button}>
            <Image
              style={{width: 12, height: 25}}
              source={require('../../../assets/icons/Vector.png')}
            />
            <Text style={stylesCountEmail.TextButton}> Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesCountEmail.buttonTwo}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../../assets/icons/googleIcon.png')}
            />
            <Text style={stylesCountEmail.TextButtonTwo}> Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* --------------------------- */}
      <Text style={stylesCountEmail.textOne}> o créala con tu</Text>
      

      <View style={stylesCountEmail.DivChildrenTwo}>
        <View style={stylesCountEmail.divFlex}>
          <Text
            style={
              state ? stylesCountEmail.textEmailOne : stylesCountEmail.textEmail
            }
            onPress={changeLink}>
            Correo electrónico{' '}
          </Text>
          <Text
            style={
              state ? stylesCountEmail.textPhone : stylesCountEmail.textPhoneOne
            }
            onPress={changeLinkOne}>
            Número Celular
          </Text>
        </View>

        <View style={stylesCountEmail.ContainerInputs}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              passwordAux: '',
              phone: '',
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
              <View style={stylesCountEmail.ContainerInputs}>
                <InputText
                  placeholder="Nombre de usuario"
                  keyboardType="email-address"
                  onChangeText={handleChange('name')}
                  value={values.name}
                  style={stylesCountEmail.Input}
                />
                {errors.name && touched.name ? (
                  <Text>{errors.name}</Text>
                ) : null}

                {state === false && (
                  <InputText
                    placeholder="Correo electrónico"
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    style={stylesCountEmail.Input}
                  />
                )}
                {state === false && errors.email && touched.email ? (
                  <Text>{errors.email}</Text>
                ) : null}

                {state === true && (
                  <InputText
                    placeholder="Teléfono a 10 dígitos"
                    keyboardType="phone-pad"
                    onChangeText={handleChange('phone')}
                    value={values.phone}
                    style={stylesCountEmail.Input}
                  />
                )}
                {state === true && errors.phone && touched.phone ? (
                  <Text>{errors.phone}</Text>
                ) : null}

                <InputText
                  placeholder="Contraseña"
                  keyboardType="default"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  secureTextEntry={true}
                  style={stylesCountEmail.Input}
                />
                {errors.password && touched.password ? (
                  <Text>{errors.password}</Text>
                ) : null}
                  <InputText
                    placeholder="Confirmar contraseña"
                    keyboardType="default"
                    onChangeText={handleChange('passwordAux')}
                    value={values.passwordAux}
                    secureTextEntry={true}
                    style={stylesCountEmail.Input}
                  />

                  {errors.passwordAux && touched.passwordAux ? (
                    <Text>{errors.passwordAux}</Text>
                  ) : null}

                <ButtonComponent
                  txtBtn="Crea tu cuenta"
                  onPress={handleSubmit}
                  style={stylesCountEmail.ButtonAux}
                />

              </View>
            )}
          </Formik>

        </View>

        <View style={stylesCountEmail.EndSection}>
          <Text style={stylesCountEmail.textOne}> Ya tienes cuenta?</Text>
          <Text style={stylesCountEmail.textTribo}>Entra a TRIBO</Text>
        </View>

      </View>

    </View>
    </KeyboardAvoidingView>
  );
};
export default CountEmail;

import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Vibration, Alert } from 'react-native';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';
import * as LocalAuthentication from 'expo-local-authentication';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

export interface loginProps{}

export function Login(props: loginProps) {

  type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Login">;
  const navigation = useNavigation<navProp>();
  const[isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCredentialsEntered, setCredentialsEntered] = useState(false);
  const auth = getAuth();

  const handleLogin = async ({email, senha}:any) => {
    // Verificar as credenciais do usuário
    await signInWithEmailAndPassword(auth, email, senha)
    .then((usuario) => {
      setCredentialsEntered(true);
      navigation.navigate('Promocao');
      return usuario;
    }).catch(erro => Alert.alert('Erro', 'Login ou senha incorreta!'));
  };

 // async function verifyAvaliabledAthentication() {
   // const compatible = await LocalAuthentication.hasHardwareAsync();
    //console.log(compatible);

    //const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    //console.log(types.map(type => LocalAuthentication.AuthenticationType[type]));
  //}

  async function handleAuthentication() {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    
    if(!isBiometricEnrolled){
      return Alert.alert('Login:', 'Nenhuma biometria foi cadastrada nesse dispositivo, Cadastre para continuar.');
    }

    if(isCredentialsEntered === true){
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Pressione o sensor para continuar',
        fallbackLabel: 'Biometria não reconhecida'
      });

      if(auth.success){
        navigation.navigate('Promocao');
      }
    }else{
      return Alert.alert('Error:', 'Realize o login com seu e-mail e senha pelo menos uma vez.');
    }
  }

  //useEffect(() => {
    //verifyAvaliabledAthentication();
  //});


  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', senha: ''}}

        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o email').email('E-mail inválido'),
          senha: Yup.string().required('Informe a senha')
        })}

        onSubmit={handleLogin}>
        {({errors, touched, handleBlur, handleChange, handleSubmit}) => (
          <>
            <Image source={require('../../assets/images/logo.png')}/>
            <TextInput placeholderTextColor = "#153932"  placeholder='Digite o seu e-mail' onBlur={handleBlur('email')} style={styles.input} onChangeText={handleChange('email')}/>
            { errors.email && touched.email && <Text style={styles.falha}>{errors.email}</Text>}
            <TextInput placeholderTextColor = "#153932"  placeholder='Digit a sua senha' onBlur={handleBlur('senha')} style={styles.input} onChangeText={handleChange('senha')} secureTextEntry/>
            { errors.senha && touched.senha && <Text style={styles.falha}>{errors.senha}</Text>}
            <TouchableOpacity style={styles.butEntrar} onPress={() => handleSubmit()} >
              <Text style={styles.textBut}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butEntrar} onPress={() => handleAuthentication()} >
              <Text style={styles.textBut}>Entrar com Biometria</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#153932',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#153932',
    borderColor: '#ddd',
    width: '100%',
    marginVertical: 5,
    placeholderTextColor: '#153932',
  },
  falha: {
    width: '50%',
    padding: 3,
    marginTop: 2,
    marginBottom: 10,
    textAlign:'center',
    backgroundColor: '#FF3333',
    color: 'white',
    borderRadius: 15
  },
  sucesso: {
    width: '50%',
    padding: 3,
    marginTop: 2,
    marginBottom: 10,
    textAlign:'center',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 15
  },
  butEntrar: {
    backgroundColor: '#FFF8DA',
    paddingVertical: 15,
    borderRadius: 5,
    width: '90%',
    marginTop: 10,
  },
  textBut: {
    color: '#153932',
    fontSize: 16,
    textAlign: 'center',
  }
});

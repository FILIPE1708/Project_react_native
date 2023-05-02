import { Formik } from 'formik';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Vibration } from 'react-native';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../navigations';

export interface loginProps{}

export function Login(props: loginProps) {

  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "Login">;
  const navigation = useNavigation<navProp>();

  const [ resultado, setResultado ] = useState<null|'logou'|'falhou'>(null);
  
  const handleLogin = async ({email, senha}:any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (email.trim() == 'filipecavalcante17@gmail.com' && senha.trim() == '12345678') {
      Vibration.vibrate(2000);
      navigation.navigate('Promocao');
    } else {
      setResultado('falhou');
    }
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', senha: ''}}

        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o email').email('E-mail inválido'),
          senha: Yup.string().required('Informe a senha').min(8, 'A senha precisa ter 8 caracteres')
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

            { resultado == 'logou' && <Text style={styles.sucesso}>Logado com sucesso</Text>}
            { resultado == 'falhou' && <Text style={styles.falha}>Email ou senha incorreto</Text>}
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

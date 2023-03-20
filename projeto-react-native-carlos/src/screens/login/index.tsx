import { Formik } from 'formik';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';

export interface loginProps{}

export function Login(props: loginProps) {

  const [ resultado, setResultado ] = useState<null|'logou'|'falhou'>(null);
  
  const handleLogin = async ({email, senha}:any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (email.trim() == 'filipecavalcante17@gmail.com' && senha.trim() == '12345678') 
      setResultado('logou')
    else
      setResultado('falhou')
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
    width: '100%',
    padding: 6,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "grey",
    placeholderTextColor: '#153932',
    borderRadius: 15,
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
    width: '50%',
    padding: 10,
    backgroundColor: '#FFF8DA',
    alignItems: 'center',
    borderRadius: 15
  },
  textBut: {
    fontSize: 15,
    color: '#153932',
  }
});

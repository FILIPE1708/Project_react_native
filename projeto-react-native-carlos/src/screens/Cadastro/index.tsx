import { Formik } from 'formik';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';

export interface cadastroProps{}

export function Cadastro(props: cadastroProps) {

  const [ resultado, setResultado ] = useState<null|'cadastrou'|'falhou'>(null);
  
  const handlecadastro = async ({senha, confirmaSenha}:any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (confirmaSenha.trim() != senha.trim()) 
      setResultado('falhou')
    else
      setResultado('cadastrou')
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', senha: '', confirmaSenha: '', nome: '', cpf: ''}}

        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o seu e-mail').email('E-mail inválido'),
          senha: Yup.string().required('Informe a sua senha').min(8, 'A senha precisa ter 8 caracteres'),
          confirmaSenha: Yup.string().required('Confirme a sua senha').min(8, 'A confirmação precisa ter 8 caracteres'),
          nome: Yup.string().required('Informe o seu nome completo'),
          cpf: Yup.string().required('Informe o seu cpf').min(14, 'O cpf precisa ter 14 caracteres').max(14, 'O cpf precisa ter 14 caracteres'),
        })}

        onSubmit={handlecadastro}>
        {({errors, touched, handleBlur, handleChange, handleSubmit}) => (
          <>
          <Image source={require('../../assets/images/logo.png')}/>
            <TextInput placeholderTextColor = "#153932"  placeholder='Digite o seu e-mail' onBlur={handleBlur('email')} style={styles.input} onChangeText={handleChange('email')}/>
            { errors.email && touched.email && <Text style={styles.falha}>{errors.email}</Text>}
            <TextInput placeholderTextColor = "#153932"  placeholder='Digite a sua senha' onBlur={handleBlur('senha')} style={styles.input} onChangeText={handleChange('senha')} secureTextEntry/>
            { errors.senha && touched.senha && <Text style={styles.falha}>{errors.senha}</Text>}
            <TextInput placeholderTextColor = "#153932"  placeholder='Confirme a sua senha' onBlur={handleBlur('confirmaSenha')} style={styles.input} onChangeText={handleChange('confirmaSenha')} secureTextEntry/>
            { errors.confirmaSenha && touched.confirmaSenha && <Text style={styles.falha}>{errors.confirmaSenha}</Text>}
            <TextInput placeholderTextColor = "#153932"  placeholder='Digite o seu nome completo' onBlur={handleBlur('nome')} style={styles.input} onChangeText={handleChange('nome')}/>
            { errors.nome && touched.nome && <Text style={styles.falha}>{errors.nome}</Text>}
            <TextInput placeholderTextColor = "#153932"  placeholder='Digite o seu cpf' onBlur={handleBlur('cpf')} style={styles.input} onChangeText={handleChange('cpf')}/>
            { errors.cpf && touched.cpf && <Text style={styles.falha}>{errors.cpf}</Text>}
            <TouchableOpacity style={styles.butCadastrar} onPress={() => handleSubmit()} >
              <Text style={styles.textBut}>Cadastrar</Text>
            </TouchableOpacity>

            { resultado == 'cadastrou' && <Text style={styles.sucesso}>Cadastrado com sucesso</Text>}
            { resultado == 'falhou' && <Text style={styles.falha}>A senha e a confirmação devem estar iguais</Text>}
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
  butCadastrar: {
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
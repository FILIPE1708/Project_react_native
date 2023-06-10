import { Formik } from 'formik';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { getFirestore, setDoc, doc } from '@firebase/firestore';

export interface cadastroProps{}

export function Cadastro(props: cadastroProps) {
  const auth = getAuth();
  const db = getFirestore();

  type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Cadastro">;
  const navigation = useNavigation<navProp>();

  const [ resultado, setResultado ] = useState<null|'cadastrou'|'falhou'>(null);
  
  const handlecadastro = async ({email, senha, confirmaSenha, nome, cpf}:any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (confirmaSenha.trim() != senha.trim()) 
      setResultado('falhou')
    else
      await createUserWithEmailAndPassword(auth, email, senha)
            .then((usuario) => {

                setDoc(doc(db, 'usuarios', usuario.user.uid), {
                  email, senha, nome, cpf
                })
                setResultado('cadastrou')
                navigation.navigate('Login')
            })
            .catch(erro => Alert.alert('Erro', 'Não foi possivel criar o usuário, tente novamente'))
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
  butCadastrar: {
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

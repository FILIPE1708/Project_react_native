import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';
import { getAuth, updateEmail, updatePassword } from '@firebase/auth';
import { getFirestore, updateDoc, doc, getDoc } from '@firebase/firestore';


type Usuario = {
    email: string, 
    senha: string,
    nome: string, 
    cpf: string
}

export function Usuario() {
  const auth = getAuth();
  const db = getFirestore();

  type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Usuario">;
  const navigation = useNavigation<navProp>();

  const [ usuario, setUsuario ] = useState<Usuario>({email: '', senha: '', nome: '', cpf: ''});
    useEffect(() => {
        if (auth.currentUser) {
            getDoc(doc(db, 'usuarios', auth.currentUser.uid))
                .then(dados => setUsuario(dados.data()))
        }
    }, [])

    const handleAtualizacaoCadastral = async({email, senha, nome, cpf}:any) => {
        try {
            if (auth.currentUser) {
                //Atualiza o email
                if(auth.currentUser?.email != email) 
                    await updateEmail(auth.currentUser, email);
                
                //Atualiza a senha
                if (senha != '')
                    await updatePassword(auth.currentUser, senha)

                //Atualizando dados
                updateDoc(doc(db, 'usuarios', auth.currentUser.uid), {email, senha, nome, cpf})
            }

            Alert.alert('Sucesso', 'Dados atualizados');
        } catch(erro) {
            Alert.alert('Erro', 'Não foi possivel completar a operação. Motivo: ' + erro);

        }
    }

  return (
    <View style={styles.container}>
      <Formik
                initialValues={usuario}
                enableReinitialize
                onSubmit={handleAtualizacaoCadastral}
            >
                {({handleChange, values, errors, touched, handleBlur, handleSubmit}) => (
          <>
          <Image source={require('../../assets/images/logo.png')}/>
            <TextInput value={values.email} placeholderTextColor = "#153932"  placeholder='Digite o seu e-mail' onBlur={handleBlur('email')} style={styles.input} onChangeText={handleChange('email')}/>
            { errors.email && touched.email && <Text style={styles.falha}>{errors.email}</Text>}

            <TextInput value={values.senha} placeholderTextColor = "#153932"  placeholder='Digite a sua senha' onBlur={handleBlur('senha')} style={styles.input} onChangeText={handleChange('senha')} secureTextEntry/>
            { errors.senha && touched.senha && <Text style={styles.falha}>{errors.senha}</Text>}

            <TextInput value={values.nome} placeholderTextColor = "#153932"  placeholder='Digite o seu nome completo' onBlur={handleBlur('nome')} style={styles.input} onChangeText={handleChange('nome')}/>
            { errors.nome && touched.nome && <Text style={styles.falha}>{errors.nome}</Text>}

            <TextInput value={values.cpf} placeholderTextColor = "#153932"  placeholder='Digite o seu cpf' onBlur={handleBlur('cpf')} style={styles.input} onChangeText={handleChange('cpf')}/>
            { errors.cpf && touched.cpf && <Text style={styles.falha}>{errors.cpf}</Text>}
            
            <TouchableOpacity style={styles.butCadastrar} onPress={() => handleSubmit()} >
              <Text style={styles.textBut}>Atualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.butCadastrar} onPress={() => {auth.signOut(); navigation.navigate('Login')}} >
              <Text style={styles.textBut}>Sair</Text>
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

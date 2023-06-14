import { Formik } from 'formik';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';

export interface enderecoProps{}

export function Endereco(props: enderecoProps) {
  type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Endereco">;
  const navigation = useNavigation<navProp>();
  

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{cep: '', logradouro: '', numero: '', complemento: ''}}

        onSubmit={() => navigation.navigate('Pagamento')}>
        {({handleSubmit}) => (
          <>
          <Image source={require('../../assets/images/logo.png')}/>
            <Text style={{color: '#FFF', fontWeight: 'bold', textAlign: 'center',}}>Preencha o endereço de entrega para continuar</Text>
            <TextInput placeholderTextColor = "#153932"  placeholder='Digite o seu cep' keyboardType="numeric" style={styles.input}/>
            <TextInput placeholderTextColor = "#153932"  placeholder='Digite o logradouro' style={styles.input} />
            <TextInput placeholderTextColor = "#153932"  placeholder='Digite o número' style={styles.input} />
            <TextInput placeholderTextColor = "#153932"  placeholder='Digite o complemento' style={styles.input}/>
            <TouchableOpacity style={styles.butCadastrar} onPress={() => handleSubmit()} >
              <Text style={styles.textBut}>Continuar</Text>
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

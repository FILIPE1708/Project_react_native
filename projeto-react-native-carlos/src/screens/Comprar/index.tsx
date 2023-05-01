import React from 'react';
import { View, Text, Image, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../navigations';

export interface comprarProps{}

export function Comprar(props: comprarProps){
    type navProp = StackNavigationProp<NavegacaoPrincipalParams, "Comprar">;
    const navigation = useNavigation<navProp>();

    return (
        <View style={styles.container}>
          <Image source={require('../../assets/images/logo_3.png')} style={styles.logo} />
          <Text style={styles.text}>Deseja Finalizar a Compra?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.butFinalizar} onPress={() => navigation.navigate('Pedido')} >
              <Text style={styles.textFinalizar}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butFinalizar} onPress={() => navigation.navigate('Lista')} >
              <Text style={styles.textFinalizar}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
    logo: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    text: {
      fontSize: 18,
      color: '#153932',
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%',
    },
    butFinalizar: {
      width: '40%',
      backgroundColor: '#153932',
      padding: 10,
      borderRadius: 5,
    },
    textFinalizar: {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
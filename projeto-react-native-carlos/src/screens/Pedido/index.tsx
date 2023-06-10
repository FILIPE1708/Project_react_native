import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';

export interface pedidoProps{}

export function Pedido(props: pedidoProps){
    type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Pedido">;
    const navigation = useNavigation<navProp>();

    const [purchaseComplete, setPurchaseComplete] = useState(false);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo_3.png')} style={styles.imagem}/>
          {purchaseComplete ? (
            <View style={styles.successContainer}>
              <Text style={styles.successText}>Compra efetuada com sucesso!</Text>
            </View>
          ) : (
            <View style={styles.formContainer}>
              <Text style={styles.title}>Efetuar Compra</Text>
              <TouchableOpacity style={styles.butConfirma} onPress={() => setPurchaseComplete(true)}>
                <Text style={styles.textConfirma}>Confirmar Compra</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      width: '90%',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    butConfirma: {
      backgroundColor: '#153932',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
      marginTop: 16,
    },
    textConfirma: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    successContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    successText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
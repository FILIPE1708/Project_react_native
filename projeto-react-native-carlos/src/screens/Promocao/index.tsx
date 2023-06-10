import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';

export interface promocaoProps{}

export function Promocao(props: promocaoProps){
    type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Promocao">;
    const navigation = useNavigation<navProp>();  

    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/banner.png')} style={styles.banner} />
        <View style={styles.card} >
          <Image source={require('../../assets/images/bici_ele_model_3.jpg')} style={styles.imagem} />
          <Text style={styles.descricao}>Bicicleta Eletrica Aro 29 Suspensao Shimano Track</Text>
          <Text style={styles.preco}>R$ 10.657,00</Text>
        </View>
        <TouchableOpacity style={styles.butVejaMais} onPress={() => navigation.navigate('Lista')}>
            <Text style={styles.textBut}>Podutos</Text>
          </TouchableOpacity>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153932',
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    width: '100%',
    height: 370,
  },
  card: {
    backgroundColor: '#FFF',
    marginVertical: 8,
    padding: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  descricao: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
  },
  preco: {
    fontSize: 16,
    color: '#153932',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  butVejaMais: {
    width: '50%',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textBut: {
    color: '#153932',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
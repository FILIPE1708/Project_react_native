import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../navigations';

export type Produto = {
  id: number;
  imagem: ImageSourcePropType;
  descricao: string;
  preco: string;
}

export function Lista() {
    type navProp = StackNavigationProp<NavegacaoPrincipalParams, "Lista">;
    const navigation = useNavigation<navProp>();

    const navegaPagina = async (id: number) => {
      if (id == 1) {
        navigation.navigate('Produto');
      } 
    }

    const produtos: Produto[] = [
        {
          id: 1,
          imagem:  require('../../assets/images/bici_ele_model_3.jpg'),
          descricao: 'Bicicleta Eletrica Aro 29 Suspensao Shimano Track',
          preco: '10.657,00',
        },
        {
          id: 2,
          imagem: require('../../assets/images/logo_2.png'),
          descricao: 'Product 2',
          preco: '15.99',
        },
        {
          id: 3,
          imagem: require('../../assets/images/bici_ele_model_3.jpg'),
          descricao: 'Product 3',
          preco: '20.99',
        },
        {
          id: 4,
          imagem: require('../../assets/images/bici_ele_model_3.jpg'),
          descricao: 'Product 4',
          preco: '25.99',
        },
        {
          id: 5,
          imagem: require('../../assets/images/bici_ele_model_3.jpg'),
          descricao: 'Product 5',
          preco: '30.99',
        },
        {
          id: 6,
          imagem: require('../../assets/images/bici_ele_model_3.jpg'),
          descricao: 'Product 6',
          preco: '35.99',
        },
      ];


      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => console.log('Back button pressed')}>
            <Text style={styles.backButton}>Voltar</Text>
          </TouchableOpacity>
          <FlatList data={produtos} renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.imagem} style={styles.image} />
                <Text style={styles.description}>{item.descricao}</Text>
                <Text style={styles.price}>R$ {item.preco}</Text>
                <TouchableOpacity onPress={() => navegaPagina(item.id)}>
                  <Text style={styles.seeMoreButton}>Veja mais</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153932',
    marginTop: 30,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  backButton: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
  },
  price: {
    fontSize: 16,
    color: '#153932',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  seeMoreButton: {
    fontSize: 16,
    color: '#153932',
    fontWeight: 'bold',
  },
});
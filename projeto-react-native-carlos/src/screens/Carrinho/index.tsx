import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';

export interface carrinhoProps{
    route: RouteProp<NavegacaoPrincipalParams, "Carrinho">
}

export function Carrinho(props: carrinhoProps) {

    type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Carrinho">;
    const navigation = useNavigation<navProp>();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.butVoltar} onPress={() => navigation.navigate('Produto', {imagem: props.route.params.imagem, descricao: props.route.params.descricao, preco: props.route.params.preco})}>
            <Text style={styles.butVoltarText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.preco}>Vamos continuar com o processo de compra?</Text>
        <Image source={props.route.params.imagem} style={styles.imagem} />
        <Text style={styles.descricao}>{props.route.params.descricao}</Text>
        <Text style={styles.preco}>R$: {props.route.params.preco}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Endereco')}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153932',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butVoltar: {
    backgroundColor: '#153932',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 50,
    height: 42,
  },
  butVoltarText: {
    fontSize: 13,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardContainer: {
    width: '90%',
    height: 390,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagem: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  descricao: {
    fontSize: 16,
    marginTop: 10,
  },
  preco: {
    fontSize: 16,
    color: '#153932',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#153932',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
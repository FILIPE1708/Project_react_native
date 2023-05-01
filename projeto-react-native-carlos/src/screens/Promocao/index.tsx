import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export interface promocaoProps{}

export function Promocao(props: promocaoProps){
    const [images] = useState([
        require('../../assets/images/logo_3.png'),
        require('../../assets/images/logo_3.png'),
        require('../../assets/images/logo_3.png')
    ]);

    return (
        <View style={styles.container}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            {images.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </ScrollView>
          <View style={styles.cardsContainer}>
            <View style={styles.card}>
              <Image source={require('./assets/product1.jpg')} style={styles.cardImage} />
              <Text style={styles.price}>R$ 10,00</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Veja mais</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Image source={require('./assets/product2.jpg')} style={styles.cardImage} />
              <Text style={styles.price}>R$ 20,00</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Veja mais</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Image source={require('./assets/product3.jpg')} style={styles.cardImage} />
              <Text style={styles.price}>R$ 30,00</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Veja mais</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.productsButton}>
            <Text style={styles.productsButtonText}>Produtos</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#153932'
    },
    image: {
      width: '100%',
      height: 200
    },
    cardsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10
    },
    card: {
      width: 150,
      height: 200,
      backgroundColor: '#FFF',
      borderRadius: 8,
      padding: 15
    },
    cardImage: {
      width: '100%',
      height: 120,
      resizeMode: 'contain'
    },
    price: {
      fontSize: 16,
      color: '#153932',
      fontWeight: 'bold',
      marginTop: 5
    },
    button: {
      backgroundColor: '#153932',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop: 10
    },
    buttonText: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: 'bold'
    },
    productsButton: {
      backgroundColor: '#FFF',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop: 10,
      alignSelf: 'center'
    },
    productsButtonText: {
      color: '#153932',
      fontSize: 14,
      fontWeight: 'bold'
    }
  });
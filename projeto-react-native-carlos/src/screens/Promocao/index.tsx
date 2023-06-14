import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';

export interface promocaoProps {}

export function Promocao(props: promocaoProps) {
  type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, 'Promocao'>;
  const navigation = useNavigation<navProp>();

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require('../../assets/images/banner.png'),
    require('../../assets/images/banner(2).png'),
    require('../../assets/images/banner(3).png'),
  ];

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / 300);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.sliderContainer}
      >
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Lista')}
          >
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex ? styles.activeDot : null]}
          />
        ))}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Produto', {imagem: require('../../assets/images/bici_ele_model_3.jpg'), descricao: 'Bicicleta Eletrica Aro 29 Suspensao Shimano Track', preco: '10.657,00', descDetalhada: 'Sua estrutura é reforçada, com quadro fabricado em alumínio, no tamanho 21 suportando adultos de até 100kg, possui guidão, canote do selim e pedivela fabricados também em alumínio, e suspensão dianteira complementando a estrutura reforçada do produto.'})}>
        <View style={styles.card} >
          <Image source={require('../../assets/images/bici_ele_model_3.jpg')} style={styles.imagem} />
          <Text style={styles.descricao}>Bicicleta Eletrica Aro 29 Suspensao Shimano Track</Text>
          <Text style={styles.preco}>R$ 10.657,00</Text>
        </View>
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
    paddingBottom: 100
  },
  sliderContainer: {
    height: 200,
    width: '100%',
  },
  image: {
    width: 360,
    height: 300,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFC107',
  },
  card: {
    backgroundColor: '#FFF',
    marginVertical: 8,
    padding: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  imagem: {
    width: 330,
    height: 270,
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
});

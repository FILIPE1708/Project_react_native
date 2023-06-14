import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';
import { Entypo  } from '@expo/vector-icons';

export type Produto = {
  id: number;
  imagem: ImageSourcePropType;
  descricao: string;
  descDetalhada: string;
  preco: string;
}

export function Bicicleta(){
  type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Bicicleta">;
    const navigation = useNavigation<navProp>();


    const produtos: Produto[] = [
        {
          id: 1,
          imagem:  require('../../assets/images/bici_ele_model_3.jpg'),
          descricao: 'Bicicleta Eletrica Aro 29 Suspensao Shimano Track',
          descDetalhada: 'Sua estrutura é reforçada, com quadro fabricado em alumínio, no tamanho 21 suportando adultos de até 100kg, possui guidão, canote do selim e pedivela fabricados também em alumínio, e suspensão dianteira complementando a estrutura reforçada do produto.',
          preco: '10.657,00',
        },
        {
          id: 2,
          imagem: require('../../assets/images/bici_model_3.jpg'),
          descricao: 'Bicicleta Aço Carbono Ksvj Aro 29 Freios A Disco 21 Vel',
          descDetalhada: 'Descrição dos Componentes da Bicicleta: QUADRO - Aço carbono KSVJ Tamanho Único, GARFO - Rígido em aço carbono, GUIDÃO - curvado em aço carbono, MANOPLAS - Borracha Flexível, TROCADORES - Revo Shift Importado (Luva),FREIOS - Mecânico com Disco de 160mm.',
          preco: '3450,00',
        },
        {
          id: 3,
          imagem: require('../../assets/images/bici_model_2.jpg'),
          descricao: 'Bicicleta Aro 29 Avance Câmbio Shimano Disco Mecânico',
          descDetalhada: 'Quadro em Alumínio 6061, Suspensão Aro 29 Over Preto c/ 80mm SEM TRAVA (Marca Conforme em estoque), Trocador RapidFire 7V Ez-Fire Importado, Câmbio Dianteiro Shimano Tourney, Câmbio Traseiro Shimano TZ500, Pedivela de Aço Importado.',
          preco: '4765.99',
        }
      ];


      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.butVoltar} onPress={() => navigation.navigate('Lista')}>
            <Text style={styles.butVoltarText}><Entypo name="arrow-with-circle-left" size={24} color="black" /></Text>
          </TouchableOpacity>
          <FlatList data={produtos} renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.imagem} style={styles.imagem} />
                <Text style={styles.descricao}>{item.descricao}</Text>
                <Text style={styles.preco}>R$ {item.preco}</Text>
                <TouchableOpacity style={styles.butVejaMais} onPress={() => navigation.navigate('Produto', {imagem: item.imagem, descricao: item.descricao, preco: item.preco, descDetalhada: item.descDetalhada})}>
                  <Text style={styles.textBut}>Veja mais</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      );
}

export function Acessorio(){
  type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Bicicleta">;
    const navigation = useNavigation<navProp>();


    const produtos: Produto[] = [
      {
        id: 4,
        imagem: require('../../assets/images/bomba.jpg'),
        descricao: 'Bomba Manual Pneu Bike Oficina Chão Calibrar Com Manômetro',
        descDetalhada: 'Bomba completa de alta qualidade, produto de excelente custo-benefício! Ideal para encher pneus de bike, moto, carro, bolas, infláveis entre outros. A bomba de ar é um item indispensável para motociclistas, motoristas, borracharias, postos de gasolina, sendo o melhor amigo de muitos ciclistas.',
        preco: '25.99',
      },
      {
        id: 5,
        imagem: require('../../assets/images/suporte.jpg'),
        descricao: 'Suporte Parede Horizontal Para Bicicleta',
        descDetalhada: 'ELE AGUENTA 30 KG, SERVE PARA BICICLETAS PESADAS, COM QUADROS DE FERRO COMO DEMONSTRADO NO VIDEO DE COLOCAÇÃO, LEMBRANDO QUE SÓ HÁ PERIGO DE DESPENCAR SE NÃO FOR INSTALADO NA PAREDE CORRETAMENTE',
        preco: '35,90',
      },
      {
        id: 6,
        imagem: require('../../assets/images/sinalizador.jpg'),
        descricao: 'Farol Bike Recarregável Profissional Sinalizador Usb K152',
        descDetalhada: 'Farol super potente com foco de longo alcance, produzida por 2 Leds Led Cree T6 de altíssimo brilho, estrutura em Liga de Alumínio super resistente para suportar condições SEVERAS. Sinalizador Traseiro de alto Brilho equipado com leds de alto brilho.',
        preco: '130,67',
      },
      ];


      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.butVoltar} onPress={() => navigation.navigate('Lista')}>
            <Text style={styles.butVoltarText}><Entypo name="arrow-with-circle-left" size={24} color="black" /></Text>
          </TouchableOpacity>
          <FlatList data={produtos} renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.imagem} style={styles.imagem} />
                <Text style={styles.descricao}>{item.descricao}</Text>
                <Text style={styles.preco}>R$ {item.preco}</Text>
                <TouchableOpacity style={styles.butVejaMais} onPress={() => navigation.navigate('Produto', {imagem: item.imagem, descricao: item.descricao, preco: item.preco, descDetalhada: item.descDetalhada})}>
                  <Text style={styles.textBut}>Veja mais</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      );
}

export function Lista() {
    type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, "Lista">;
    const navigation = useNavigation<navProp>();


    const produtos: Produto[] = [
        {
          id: 1,
          imagem:  require('../../assets/images/bici_ele_model_3.jpg'),
          descricao: 'Bicicleta Eletrica Aro 29 Suspensao Shimano Track',
          descDetalhada: 'Sua estrutura é reforçada, com quadro fabricado em alumínio, no tamanho 21 suportando adultos de até 100kg, possui guidão, canote do selim e pedivela fabricados também em alumínio, e suspensão dianteira complementando a estrutura reforçada do produto.',
          preco: '10.657,00',
        },
        {
          id: 2,
          imagem: require('../../assets/images/bici_model_3.jpg'),
          descricao: 'Bicicleta Aço Carbono Ksvj Aro 29 Freios A Disco 21 Vel',
          descDetalhada: 'Descrição dos Componentes da Bicicleta: QUADRO - Aço carbono KSVJ Tamanho Único, GARFO - Rígido em aço carbono, GUIDÃO - curvado em aço carbono, MANOPLAS - Borracha Flexível, TROCADORES - Revo Shift Importado (Luva),FREIOS - Mecânico com Disco de 160mm.',
          preco: '3450,00',
        },
        {
          id: 3,
          imagem: require('../../assets/images/bici_model_2.jpg'),
          descricao: 'Bicicleta Aro 29 Avance Câmbio Shimano Disco Mecânico',
          descDetalhada: 'Quadro em Alumínio 6061, Suspensão Aro 29 Over Preto c/ 80mm SEM TRAVA (Marca Conforme em estoque), Trocador RapidFire 7V Ez-Fire Importado, Câmbio Dianteiro Shimano Tourney, Câmbio Traseiro Shimano TZ500, Pedivela de Aço Importado.',
          preco: '4765.99',
        },
        {
          id: 4,
          imagem: require('../../assets/images/bomba.jpg'),
          descricao: 'Bomba Manual Pneu Bike Oficina Chão Calibrar Com Manômetro',
          descDetalhada: 'Bomba completa de alta qualidade, produto de excelente custo-benefício! Ideal para encher pneus de bike, moto, carro, bolas, infláveis entre outros. A bomba de ar é um item indispensável para motociclistas, motoristas, borracharias, postos de gasolina, sendo o melhor amigo de muitos ciclistas.',
          preco: '25.99',
        },
        {
          id: 5,
          imagem: require('../../assets/images/suporte.jpg'),
          descricao: 'Suporte Parede Horizontal Para Bicicleta',
          descDetalhada: 'ELE AGUENTA 30 KG, SERVE PARA BICICLETAS PESADAS, COM QUADROS DE FERRO COMO DEMONSTRADO NO VIDEO DE COLOCAÇÃO, LEMBRANDO QUE SÓ HÁ PERIGO DE DESPENCAR SE NÃO FOR INSTALADO NA PAREDE CORRETAMENTE',
          preco: '35,90',
        },
        {
          id: 6,
          imagem: require('../../assets/images/sinalizador.jpg'),
          descricao: 'Farol Bike Recarregável Profissional Sinalizador Usb K152',
          descDetalhada: 'Farol super potente com foco de longo alcance, produzida por 2 Leds Led Cree T6 de altíssimo brilho, estrutura em Liga de Alumínio super resistente para suportar condições SEVERAS. Sinalizador Traseiro de alto Brilho equipado com leds de alto brilho.',
          preco: '130,67',
        },
      ];


      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.butVoltar} onPress={() => navigation.navigate('Promocao')}>
            <Text style={styles.butVoltarText}><Entypo name="arrow-with-circle-left" size={24} color="black" /></Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.butCategorias]} onPress={() => navigation.navigate('Bicicleta')}>
                <Text style={styles.butVoltarText}>Bicicletas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butCategorias} onPress={() => navigation.navigate('Acessorio')}>
                <Text style={styles.butVoltarText}>Acessórios</Text>
              </TouchableOpacity>
          </View>
          <FlatList data={produtos} renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.imagem} style={styles.imagem} />
                <Text style={styles.descricao}>{item.descricao}</Text>
                <Text style={styles.preco}>R$ {item.preco}</Text>
                <TouchableOpacity style={styles.butVejaMais} onPress={() => navigation.navigate('Produto', {imagem: item.imagem, descricao: item.descricao, preco: item.preco, descDetalhada: item.descDetalhada})}>
                  <Text style={styles.textBut}>Veja mais</Text>
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
    marginTop: 28,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 80
  },
  butVoltar: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 45,
    height: 45,
  },
  butVoltarText: {
    fontSize: 16,
    color: '#153932',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#FFF',
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
  },
  imagem: {
    width: '100%',
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
    backgroundColor: '#153932',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textBut: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butCategorias: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
    width: 105,
    height: 40,
    marginLeft: 10
  },
});
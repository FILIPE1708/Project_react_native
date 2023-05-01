import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../navigations';


export interface produtoProps{
  route: RouteProp<NavegacaoPrincipalParams, "Produto">
}

export function Produto(props: produtoProps) {

    type navProp = StackNavigationProp<NavegacaoPrincipalParams, "Produto">;
    const navigation = useNavigation<navProp>();

  return (
    <View style={styles.container}>
          <>
            <Image source={props.route.params.imagem}/>
            <Text style={styles.text}>{props.route.params.descricao}</Text>
            <Text style={styles.textValue}>R$:{props.route.params.preco}</Text>
            <TextInput placeholderTextColor = "#153932" keyboardType="numeric" style={styles.input}  placeholder='00000-000' />
            <TouchableOpacity style={styles.butComprar} onPress={() => navigation.navigate('Carrinho', {imagem: props.route.params.imagem, descricao: props.route.params.descricao, preco: props.route.params.preco})}>
              <Text style={styles.textBut}>Comprar</Text>
            </TouchableOpacity>
           <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
              <View style={{flex: 1, height: 1, backgroundColor: '#153932'}} />
                <View>
                  <Text style={{width: 100, textAlign: 'center', fontSize: 20, color: '#153932'}}>Descrição:</Text>
                </View>
              <View style={{flex: 1, height: 1, backgroundColor: '#153932'}} />
            </View>
            <Text style={styles.text}>
              {props.route.params.descDetalhada}
            </Text>
          </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    marginTop: 50,
    alignItems: 'center'
    
  },
  text: {
    fontSize: 20,
    color: '#153932'
  },
  textValue: {
    fontSize: 30,
    color: '#153932',
  },
  input: {
    backgroundColor: 'white',
    width: '70%',
    textAlign: 'center',
    padding: 6,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "grey",
    placeholderTextColor: '#153932',
    borderRadius: 15,
  },
  butComprar: {
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
  }
});

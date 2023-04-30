import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';


export interface produtoProps{}

export function Produto(props: produtoProps) {

  return (
    <View style={styles.container}>
          <>
            <Image source={require('../../assets/images/bici_ele_model_3.jpg')}/>
            <Text style={styles.text}>Bicicleta Eletrica Aro 29 Suspensao Shimano Track</Text>
            <Text style={styles.textValue}>R$: 10.657,00</Text>
            <TextInput placeholderTextColor = "#153932" keyboardType="numeric" style={styles.input}  placeholder='00000-000' />
            <TouchableOpacity style={styles.butComprar} >
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
              Sua estrutura é reforçada, com quadro fabricado em alumínio, no tamanho 21 suportando       adultos de até 100kg, possui guidão, canote do selim e pedivela fabricados também em alumínio, e suspensão dianteira complementando a estrutura reforçada do produto.
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
    padding: 10,
    backgroundColor: '#153932',
    alignItems: 'center',
    borderRadius: 15
  },
  textBut: {
    fontSize: 15,
    color: 'white',
  }
});

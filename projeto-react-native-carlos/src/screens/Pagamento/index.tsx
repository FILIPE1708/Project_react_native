import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavegacaoPrincipalParams } from '../navigations';

export function Pagamento() {
  type navProp = BottomTabNavigationProp<NavegacaoPrincipalParams, 'Pagamento'>;
  const navigation = useNavigation<navProp>();

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const handlePaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  const handlePayment = () => {
    if (paymentMethod === 'credit_card') {
      if (cardNumber && cardExpiration && cardCVV) {
        navigation.navigate('Comprar');

      } else {
        Alert.alert('','Preencha todos os dados do cartão');
      }
    } else if (paymentMethod === 'boleto') {
        navigation.navigate('Comprar');

    } else {
      Alert.alert('','Selecione um método de pagamento');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o método de pagamento</Text>
      <TouchableOpacity
        style={[
          styles.paymentOption,
          paymentMethod === 'credit_card' && styles.selectedOption,
        ]}
        onPress={() => handlePaymentMethod('credit_card')}
      >
        <Text
          style={[
            styles.paymentOptionText,
            paymentMethod === 'credit_card' && styles.selectedOptionText,
          ]}
        >
          Cartão de Crédito
        </Text>
      </TouchableOpacity>
      {paymentMethod === 'credit_card' && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Número do cartão"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Validade (MM/AA)"
            value={cardExpiration}
            onChangeText={setCardExpiration}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={cardCVV}
            onChangeText={setCardCVV}
          />
        </View>
      )}
      <TouchableOpacity
        style={[
          styles.paymentOption,
          paymentMethod === 'boleto' && styles.selectedOption,
        ]}
        onPress={() => handlePaymentMethod('boleto')}
      >
        <Text
          style={[
            styles.paymentOptionText,
            paymentMethod === 'boleto' && styles.selectedOptionText,
          ]}
        >
          Boleto Bancário
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#153932',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#153932',
    borderColor: '#FFF',
  },
  paymentOptionText: {
    color: '#153932',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedOptionText: {
    color: '#FFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#153932',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: '80%',
    fontSize: 16,
  },
  payButton: {
    backgroundColor: '#153932',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  payButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

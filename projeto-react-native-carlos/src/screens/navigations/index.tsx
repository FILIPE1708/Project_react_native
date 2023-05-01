import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Inicio } from '../Inicio';
import { Login } from '../login';
import { Cadastro } from '../Cadastro';
import { Lista } from '../listagem';
import { Produto } from '../Produto';
import { Carrinho } from '../Carrinho';
import { Endereco } from '../Endereco';
import { Comprar } from '../Comprar';
import { Pedido } from '../Pedido';
import { Promocao } from '../Promocao';

export type NavegacaoPrincipalParams = {
    Inicio: undefined,
    Login: undefined,
    Cadastro: undefined,
    Lista: undefined,
    Produto: undefined,
    Carrinho: undefined,
    Endereco: undefined,
    Comprar: undefined,
    Pedido: undefined,
    Promocao: undefined
}

const Stack = createStackNavigator<NavegacaoPrincipalParams>();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Promocao' component={Promocao}/>
            <Stack.Screen name='Inicio' component={Inicio}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Cadastro' component={Cadastro}/>
            <Stack.Screen name='Produto' component={Produto}/>
            <Stack.Screen name='Carrinho' component={Carrinho}/>
            <Stack.Screen name='Endereco' component={Endereco}/>
            <Stack.Screen name='Comprar' component={Comprar}/>
            <Stack.Screen name='Pedido' component={Pedido}/>
            <Stack.Screen name='Lista' component={Lista}/>
        </Stack.Navigator>
    </NavigationContainer>
)
    

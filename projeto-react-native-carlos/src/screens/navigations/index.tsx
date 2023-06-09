import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Inicio } from '../Inicio';
import { Login } from '../login';
import { Cadastro } from '../Cadastro';
import { Lista, Bicicleta, Acessorio } from '../listagem';
import { Produto } from '../Produto';
import { Carrinho } from '../Carrinho';
import { Endereco } from '../Endereco';
import { Comprar } from '../Comprar';
import { Pedido } from '../Pedido';
import { Promocao } from '../Promocao';
import {Usuario} from '../Usuario';
import { Pagamento } from '../Pagamento';
import { Entypo  } from '@expo/vector-icons';

export type NavegacaoPrincipalParams = {
    Inicio: undefined,
    Login: undefined,
    Cadastro: undefined,
    Lista: undefined,
    Bicicleta: undefined,
    Acessorio: undefined,
    Produto: undefined,
    Carrinho: undefined,
    Endereco: undefined,
    Comprar: undefined,
    Pedido: undefined,
    Promocao: undefined,
    Usuario: undefined,
    Pagamento: undefined
}

const Tab = createBottomTabNavigator<NavegacaoPrincipalParams>();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor: '#153932', tabBarStyle: {position: 'absolute', marginBottom: 14, marginRight: 14, marginLeft: 14, borderTopWidth: 0, borderRadius: 15, backgroundColor: '#ffff', height: 60}}}>
            <Tab.Screen name='Inicio' component={Inicio} options={{tabBarStyle: { display: 'none'}, tabBarButton: () => null}}/>
            <Tab.Screen name='Login' component={Login} options={{tabBarStyle: { display: 'none' }, tabBarButton: () => null}}/>
            <Tab.Screen name='Cadastro' component={Cadastro} options={{tabBarStyle: { display: 'none' }, tabBarButton: () => null}}/>
            <Tab.Screen name='Promocao' component={Promocao} options={{tabBarLabel: 'Home', tabBarIcon: ({color, size}) => {return <Entypo name="home" size={size} color={color} />;}}}/>
            <Tab.Screen name='Lista' component={Lista} options={{tabBarLabel: 'Produtos', tabBarIcon: ({color, size}) => {return <Entypo name="archive" size={size} color={color} />;}}}/>
            <Tab.Screen name='Bicicleta' component={Bicicleta} options={{tabBarButton: () => null}}/>
            <Tab.Screen name='Acessorio' component={Acessorio} options={{tabBarButton: () => null}}/>
            <Tab.Screen name='Usuario' component={Usuario} options={{tabBarLabel: 'Perfil', tabBarIcon: ({color, size}) => {return <Entypo name="user" size={size} color={color} />;}}}/>
            <Tab.Screen name='Produto' component={Produto} options={{tabBarButton: () => null}}/>
            <Tab.Screen name='Carrinho' component={Carrinho} options={{tabBarButton: () => null}}/>
            <Tab.Screen name='Endereco' component={Endereco} options={{tabBarButton: () => null}}/>
            <Tab.Screen name='Comprar' component={Comprar} options={{tabBarButton: () => null}}/>
            <Tab.Screen name='Pedido' component={Pedido} options={{tabBarButton: () => null}}/>
            <Tab.Screen name='Pagamento' component={Pagamento} options={{tabBarButton: () => null}}/>
        </Tab.Navigator>
    </NavigationContainer>
)
    

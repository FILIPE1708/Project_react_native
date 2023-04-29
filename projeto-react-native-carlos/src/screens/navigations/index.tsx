import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Inicio } from '../Inicio';
import { Login } from '../login';
import { Cadastro } from '../Cadastro';

export type NavegacaoPrincipalParams = {
    Inicio: undefined,
    Login: undefined,
    Cadastro: undefined
}

const Stack = createStackNavigator<NavegacaoPrincipalParams>();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Inicio' component={Inicio}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Cadastro' component={Cadastro}/>
        </Stack.Navigator>
    </NavigationContainer>
)
    

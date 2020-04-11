import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';

const Stack = createStackNavigator();

function AuthenticationRoutes() {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Login" 
				component={Login} 
				options={{ title: 'Entrar' }}
			/>
			<Stack.Screen 
				name="ForgotPassword" 
				component={ForgotPassword} 
				options={{ title: 'Esqueci minha senha' }}
			/>
			<Stack.Screen 
				name="Register" 
				component={Register} 
				options={{ title: 'Criar conta' }}
			/>
		</Stack.Navigator>
	);
}

export default AuthenticationRoutes;
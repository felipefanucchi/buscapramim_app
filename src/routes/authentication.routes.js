import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';

const Stack = createStackNavigator();

function AuthenticationRoutes() {
	return (
		<>
			<StatusBar hidden={true}></StatusBar>
			<Stack.Navigator>
				<Stack.Screen 
					name="Login" 
					component={Login} 
					options={{ 
						title: 'Entrar',
						headerShown: false
					}}
				/>
				<Stack.Screen 
					name="ForgotPassword" 
					component={ForgotPassword} 
					options={{ 
						title: null,
						headerStyle: {
							backgroundColor: 'transparent',
							borderBottomWidth: 0,
							elevation: 0,
							shadowOpacity: 0,
							shadowColor: 'none'
						},
						headerTintColor: '#E02041',
					}}
				/>
				<Stack.Screen 
					name="Register" 
					component={Register} 
					options={{ 
						title: null,
						headerStyle: {
							backgroundColor: 'transparent',
							borderBottomWidth: 0,
							elevation: 0,
							shadowOpacity: 0,
							shadowColor: 'none'
						},
						headerTintColor: '#E02041',
					}}
				/>
			</Stack.Navigator>
		</>
	);
}

export default AuthenticationRoutes;
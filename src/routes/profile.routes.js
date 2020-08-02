import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import AddNeed from '../pages/AddNeed';
import ListNeeds from '../pages/ListNeeds';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();

function ProfileRoutes() {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Perfil" 
				component={Profile} 
				options={{
					headerShown: false,
					headerTintColor: '#FFF',
					headerTitleStyle: {
						fontSize: 20,
					},
					headerStyle: {
						backgroundColor: '#EC2041',
					}
				}}
			/>
			<Stack.Screen 
				name="Adicionar Necessidade" 
				component={AddNeed} 
				options={{ 
					title: 'Adicionar uma necessidade',
					headerTintColor: '#FFF',
					headerTitleStyle: {
						fontSize: 20,
					},
					headerStyle: {
						backgroundColor: '#EC2041',
					}
				}}
			/>
			<Stack.Screen 
				name="Listar Necessidades" 
				component={ListNeeds} 
				options={() => ({ 
					title: 'Minhas necessidades',
					headerTintColor: '#FFF',
					headerStyle: {
						backgroundColor: '#EC2041',
					}
				})}
			/>
		</Stack.Navigator>
	);
}

export default ProfileRoutes;
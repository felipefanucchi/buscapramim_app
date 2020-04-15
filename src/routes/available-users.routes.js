import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Detail from '../pages/Detail';
import AvailableUsers from '../pages/AvailableUsers';

const Stack = createStackNavigator();

function AvailableRoutes() {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Avaialable Users" 
				component={AvailableUsers} 
				options={{ 
					title: 'Usuários Disponíveis',
					headerTintColor: '#FFF',
					headerStyle: {
						backgroundColor: '#EC2041'
					}
				}}
			/>
			<Stack.Screen 
				name="Detail" 
				component={Detail} 
				options={({ route }) => ({ 
					title: route.params.name,
					headerTintColor: '#FFF',
					headerStyle: {
						backgroundColor: '#EC2041'
					}
				})}
			/>
		</Stack.Navigator>
	);
}

export default AvailableRoutes;
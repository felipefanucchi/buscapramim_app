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
				name="Usuários Disponíveis" 
				component={AvailableUsers} 
				options={{ 
					headerShown: false
				}}
			/>
			<Stack.Screen 
				name="Detalhe" 
				component={Detail} 
				options={({ route }) => ({ 
					id: route.params.id,
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
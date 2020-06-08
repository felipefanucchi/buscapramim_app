import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Stack = createStackNavigator();

function HomeRoutes() {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Home" 
				component={Home} 
				options={{ 
					title: 'Necessidades próximas',
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
				name="Home Detail" 
				component={Detail} 
				options={({ route }) => ({ 
					title: route.params.name,
					headerTintColor: '#FFF',
					headerStyle: {
						backgroundColor: '#EC2041',
					}
				})}
			/>
		</Stack.Navigator>
	);
}

export default HomeRoutes;
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
						fontFamily: 'MontSerratSemiBold',
					},
					headerStyle: {
						backgroundColor: '#EC2041',
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
						backgroundColor: '#EC2041',
						fontSize: 18,
						fontFamily: 'MontSerratSemiBold'
					}
				})}
			/>
		</Stack.Navigator>
	);
}

export default HomeRoutes;
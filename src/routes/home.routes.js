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
				options={{ title: 'Entrar' }}
			/>
			<Stack.Screen 
				name="Detail" 
				component={Detail} 
				options={({ route }) => ({ 
					title: route.params.name 
				})}
			/>
		</Stack.Navigator>
	);
}

export default HomeRoutes;
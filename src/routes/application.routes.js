import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Routes
import HomeRoutes from './home.routes';

// Screens
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

function ApplicationRoutes() {
	return (
		<Tab.Navigator>
			<Tab.Screen 
				name="Home" 
				options={{ headerShown: false }} 
				component={HomeRoutes}
			/>
			<Tab.Screen 
				name="Profile" 
				options={{ title: 'Perfil' }} 
				component={Profile}
			/>
		</Tab.Navigator>
	);
}

export default ApplicationRoutes;
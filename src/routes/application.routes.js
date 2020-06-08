import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, Platform } from 'react-native';

// Routes
import HomeRoutes from './home.routes';
import AvailableRoutes from './available-users.routes';

// Screens
import Profile from '../pages/Profile';

// Icons
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function ApplicationRoutes() {
	return (
		<>
		<StatusBar barStyle="light-content" backgroundColor="#EC2041"></StatusBar>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						switch (route.name) {
							case 'Necessidades':
								iconName = 'map';
								break;
							case 'Usuários disponíveis':
								iconName = 'users';
								break;
							case 'Perfil':
								iconName = 'settings';
								break;
						}
						return <Feather name={iconName} size={size} color={color} />;
					}
				})}
				tabBarOptions={{
					inactiveTintColor: '#FFF',
					activeTintColor: '#EC2041',
					activeBackgroundColor: '#FFF',
					size: 20,
					style: {
						backgroundColor: '#EC2041',
						height: Platform.OS === 'ios' ? 80 : 60,
					},
					showLabel: false
				}}
				>
				<Tab.Screen 
					name="Necessidades" 
					options={{ headerShown: false }} 
					component={HomeRoutes}
				/>
				<Tab.Screen 
					name="Usuários disponíveis" 
					options={{ headerShown: false }} 
					component={AvailableRoutes}
				/>
				<Tab.Screen 
					name="Perfil" 
					options={{ title: 'Perfil' }} 
					component={Profile}
				/>
			</Tab.Navigator>
		</>
	);
}

export default ApplicationRoutes;
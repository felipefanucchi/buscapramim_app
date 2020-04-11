import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createStackNavigator();

function Routes() {
	return(
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	)
}

export default Routes;
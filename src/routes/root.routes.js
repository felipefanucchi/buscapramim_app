import "react-native-gesture-handler";
import React from "react";
import AuthenticationRoutes from "./authentication.routes";
import ApplicationRoutes from "./application.routes";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function RootRoutes({ userToken }) {
	return (
		<Stack.Navigator headerMode="none">
			{userToken ? (
				<Stack.Screen
					name="Application"
					component={ApplicationRoutes}
					options={{
						animationEnabled: false
					}}
				/>
			) : (
				<Stack.Screen
					name="Authentication"
					component={AuthenticationRoutes}
					options={{
						animationEnabled: false
					}}
				/>
			)}
		</Stack.Navigator>
	);
}

export default RootRoutes;

import React, { useContext, useEffect } from "react";
import AuthenticationRoutes from "./authentication.routes";
import ApplicationRoutes from "./application.routes";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/Auth";

const Stack = createStackNavigator();

// Screens
import Splash from "../pages/Splash";

function RootRoutes() {
	const { token } = useContext(AuthContext);
	
	useEffect(() => {
		console.log(token);
	}, [])

	// if (isLoading) {
	// 	return <Splash />;
	// }

	return (
		<Stack.Navigator headerMode="none">
			{token ? (
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

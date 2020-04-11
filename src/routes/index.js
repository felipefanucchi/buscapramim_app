import "react-native-gesture-handler";
import React, { useState, useEffect, useMemo } from "react";
import AuthenticationRoutes from "./authentication.routes";
import ApplicationRoutes from "./application.routes";
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from "../context";

// Screens
import Splash from "../pages/Splash";

function Routes() {
	const [isLoading, setIsLoading] = useState(true);
	const [userToken, setUserToken] = useState(null);

	const authContext = useMemo(() => {
		return {
			signIn: () => {
				setIsLoading(false);
				setUserToken('asdgg');
			},
			signUp: () => {
				setIsLoading(false);
				setUserToken('asdgg');
			},
			signOut: () => {
				setIsLoading(false);
				setUserToken(null);
			},
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	if (isLoading) {
		return <Splash />;
	}

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				{userToken ? (<ApplicationRoutes />) : (<AuthenticationRoutes />)}
			</NavigationContainer>
		</AuthContext.Provider>
	)
}

export default Routes;

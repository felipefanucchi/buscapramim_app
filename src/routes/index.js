import "react-native-gesture-handler";
import React, { useState, useEffect, useMemo, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, AuthContext } from '../context/Auth'

//Routes
import RootRoutes from "./root.routes";

function Routes() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<RootRoutes />
			</AuthProvider>
		</NavigationContainer>
	);
}

export default Routes;

import React, { createContext, useState } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [token, setToken] = useState(null);

	async function signIn(data) {
		try {
			const response = await api.post('login', data);
			const {token} = response.data;
			setToken(token);
		} catch(err) {
			return err;
		}
	}

	return (
		<AuthContext.Provider value={{ signIn, token }}>
			{ children }
		</AuthContext.Provider>
	);
}
import React, { createContext } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	async function signIn(data) {
		try {
			return api.post('login', data);
		} catch(err) {
			return err;
		}
	}

	return (
		<AuthContext.Provider value={{ signIn }}>
			{ children }
		</AuthContext.Provider>
	);
}
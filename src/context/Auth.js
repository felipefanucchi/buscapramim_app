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
			getUser(token);
		} catch(err) {
			return err;
		}
	}

	async function register(data) {
		try {
			const response = await api.post('register', data);
			console.log(response.data);
		} catch(err) {
			return err;
		}
	}

	async function getUser(token) {
		const response = await api.get('profile', {
			headers: {
				Authorization: token
			}
		});

		const user = response.data;
		setUser(user);
	}

	return (
		<AuthContext.Provider value={{ signIn, token, register }}>
			{ children }
		</AuthContext.Provider>
	);
}
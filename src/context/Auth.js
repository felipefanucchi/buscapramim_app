import React, { createContext, useState } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);

	async function signIn(data) {
		try {
			const response = await api.post('login', data);
			const {token} = response.data;
			setToken(token);
			await getUser(token); 
			return response;
		} catch(err) {
			if (err.response) return err.response;
			return err;
		}
	}

	async function register(data) {
		try {
			const response = await api.post('register', data);
			return response;
		} catch(err) {
			if (err.response) return err.response;
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

	async function forgotPassword(data) {
		try {
			const response = await api.post('forgot_password', data);
			return response;
		} catch (err) {
			if (err.response) return err.response;
			return err;
		}
	}

	async function logout() {
		setToken(null);
	}

	return (
		<AuthContext.Provider value={{ signIn, token, register, forgotPassword, logout, user }}>
			{ children }
		</AuthContext.Provider>
	);
}
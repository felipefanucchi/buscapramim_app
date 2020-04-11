import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context';

function Register() {
	const { signUp } = useContext(AuthContext);

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Register Screen</Text>
			<Button title="Cadastrar" onPress={() => signUp()}/>
		</View>
	);
}

export default Register;
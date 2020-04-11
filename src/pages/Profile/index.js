import React, { useContext } from 'react';
import { Text } from 'react-native';
import { AuthContext } from '../../context';

function Profile() {
	const {signOut} = useContext(AuthContext);

	return(
		<>
			<Text>Olá, você está na tela de perfil.</Text>
			<Text onPress={() => signOut()}>Sair</Text>
		</>
	);
}

export default Profile;
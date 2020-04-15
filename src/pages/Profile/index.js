import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../../context';

function Profile() {
	const {signOut} = useContext(AuthContext);

	return(
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EC2041'}}>
			<Text style={{ color: '#FFF' }}>Olá, você está na tela de perfil.</Text>
			<Text style={{ color: '#FFF' }} onPress={() => signOut()}>Sair</Text>
		</View>
	);
}

export default Profile;
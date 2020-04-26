import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../../context';

import * as content from '../../styles/CustomContent/styles';
import styles from './styles';

function Profile() {
	const {signOut} = useContext(AuthContext);

	return(
		<View style={content.styles.background}>
			<View style={content.styles.header}>
				<Text style={content.styles.headerTitle}>Configurações</Text> 
				<Text style={content.styles.headerSubtitle}>Informações da sua conta</Text> 
			</View>
			<View style={content.styles.content}>

			</View>
		</View>
	);
}

export default Profile;
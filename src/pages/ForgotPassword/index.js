import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from '../../styles/Authentication/styles';

function ForgotPassword() {
	return(
		<View style={styles.backgroundCover}>
			<Text style={styles.logo}>BUSCA<Text style={{fontWeight: '700'}}>PRA</Text>MIM</Text>
			<Text style={{marginTop: 10, color: 'gray'}}>Perdeu sua senha? Digite seu e-mail abaixo</Text>
			<View style={styles.panel}>
				<TextInput style={styles.input} placeholder="E-mail" />
				<Button
					style={styles.buttonPrimary}
					title="Recuperar" 
					onPress={() => {}}
					color="#E02041"
				/>
			</View>
		</View>
	);
}

export default ForgotPassword;
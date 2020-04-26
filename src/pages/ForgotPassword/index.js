import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from '../../styles/Authentication/styles';

function ForgotPassword() {
	return(
		<View style={styles.backgroundCover}>
			<Text style={styles.logo}>BUSCA<Text style={{fontFamily: 'MontSerratBold'}}>PRA</Text>MIM</Text>
			<Text style={{marginTop: 10, color: 'gray', fontFamily: 'MontSerratSemiBold'}}>Perdeu sua senha? Digite seu e-mail abaixo</Text>
			<View style={styles.panel}>
				<TextInput style={styles.input} placeholder="E-mail" />
				<TouchableHighlight style={styles.buttonPrimary} onPress={() => {}}>
					<Text style={styles.buttonPrimaryText}>
					Recuperar
					</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

export default ForgotPassword;
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableHighlight } from 'react-native';
import styles from '../../styles/Authentication/styles';

function Register() {
  const [errorMsg, setErrorMsg] = useState(null);
	
	return (
		<View style={styles.backgroundCover}>
			<Text style={styles.logo}>BUSCA<Text style={{fontFamily: 'MontSerratBold'}}>PRA</Text>MIM</Text>
			<Text style={{marginTop: 10, color: 'gray', fontFamily: 'MontSerratSemiBold'}}>Crie sua conta</Text>
			<View style={styles.panel}>
				<TextInput style={styles.input} placeholder="Nome"/>
				<TextInput style={styles.input} placeholder="E-mail" />
				<TextInput style={styles.input} placeholder="Telefone" />
				<TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" />
				<TextInput secureTextEntry={true} style={styles.input} placeholder="Confirme a senha" />
				{errorMsg ? <Text>{errorMsg}</Text> : null}
				<TouchableHighlight style={styles.buttonPrimary} onPress={() => {}}>
					<Text style={styles.buttonPrimaryText}>
					Cadastrar
					</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

export default Register;
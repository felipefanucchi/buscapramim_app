import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { AuthContext } from '../../context';
import styles from '../../styles/Authentication/styles';

function Register() {
  const [errorMsg, setErrorMsg] = useState(null);
	const { signUp } = useContext(AuthContext);
	
	return (
		<View style={styles.backgroundCover}>
			<Text style={styles.logo}>BUSCA<Text style={{fontWeight: '700'}}>PRA</Text>MIM</Text>
			<Text style={{marginTop: 10, color: 'gray'}}>Crie sua conta</Text>
			<View style={styles.panel}>
				<TextInput style={styles.input} placeholder="Nome"/>
				<TextInput style={styles.input} placeholder="E-mail" />
				<TextInput style={styles.input} placeholder="Telefone" />
				<TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" />
				<TextInput secureTextEntry={true} style={styles.input} placeholder="Confirme a senha" />
				{errorMsg ? <Text>{errorMsg}</Text> : null}
				<Button
					style={styles.buttonPrimary}
					title="Cadastrar" 
					onPress={() => signUp()}
					color="#E02041"
				/>
			</View>
		</View>
	);
}

export default Register;
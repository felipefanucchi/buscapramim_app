import React, { useState, useContext } from "react";
import { View, Text, TouchableHighlight, TextInput, Alert } from "react-native";
import styles from "../../styles/Authentication/styles";
import { AuthContext } from "../../context/Auth";

function ForgotPassword({ navigation }) {
	const [email, setEmail] = useState(null);
	const { forgotPassword } = useContext(AuthContext);

	async function handleForgotPassword() {
		try {
			const response = await forgotPassword({ email });

			// Criar função async para o Alert.
			if (response.status === 204) {
				Alert.alert('Oba, recebemos sua requisição!', 'Não se preocupe, foi enviado um link para seu e-mail para você alterar sua senha!');
				navigation.goBack();
				return;
			}

			Alert.alert('Erro na recuperação de senha', response.data.error);
		} catch (err) {
			Alert.alert('Erro na recuperação de senha', err.data.error);
		}
	}
	return (
		<View style={styles.backgroundCover}>
			<Text style={styles.logo}>
				BUSCA<Text style={{ fontFamily: "MontSerratBold" }}>PRA</Text>MIM
			</Text>
			<Text
				style={{
					marginTop: 10,
					color: "gray",
					fontFamily: "MontSerratSemiBold"
				}}
			>
				Perdeu sua senha? Digite seu e-mail abaixo
			</Text>
			<View style={styles.panel}>
				<TextInput
					style={styles.input}
					onChangeText={text => setEmail(text)}
					placeholder="E-mail"
				/>
				<TouchableHighlight
					style={styles.buttonPrimary}
					onPress={() => handleForgotPassword()}
				>
					<Text style={styles.buttonPrimaryText}>Recuperar</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

export default ForgotPassword;

import React, { useContext, useState } from "react";
import { Text, View, TouchableHighlight, TextInput, Alert } from "react-native";
import { AuthContext } from "../../context/Auth";
import styles from "../../styles/Authentication/styles";

function Login({ navigation }) {
	const { signIn } = useContext(AuthContext);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	async function login() {
		try {
			console.log({ email, password });
			const response = await signIn({ email, password });
			if (response.status === 200)  return;

			Alert.alert('Erro no login', response.data.error);
		} catch (err) {
			console.log('erro no login, ', err);
			Alert.alert("Erro no login", err.data.error);
		}
	}

	return (
		<View style={styles.backgroundCover}>
			<Text style={styles.logo}>
				BUSCA<Text style={{ fontFamily: "MontSerratBold" }}>PRA</Text>MIM
			</Text>
			<View style={styles.panel}>
				<TextInput
					style={styles.input}
					autoCapitalize="none"
					placeholder="E-mail"
					onChangeText={text => setEmail(text)}
				></TextInput>
				<TextInput
					secureTextEntry={true}
					style={styles.input}
					placeholder="Senha"
					onChangeText={password => setPassword(password)}
				></TextInput>
				<TouchableHighlight
					style={styles.buttonPrimary}
					onPress={() => login()}
				>
					<Text style={styles.buttonPrimaryText}>Entrar</Text>
				</TouchableHighlight>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<Text
						style={styles.buttonText}
						onPress={() => navigation.push("Register")}
					>
						Crie sua conta
					</Text>
					<Text
						style={styles.buttonText}
						onPress={() => navigation.push("ForgotPassword")}
					>
						Esqueci minha senha
					</Text>
				</View>
			</View>
		</View>
	);
}

export default Login;

import React, { useContext, useState, useEffect } from "react";
import {
	View,
	Text,
	Button,
	TextInput,
	TouchableHighlight,
	Alert
} from "react-native";
import styles from "../../styles/Authentication/styles";
import { AuthContext } from "../../context/Auth";
import * as Location from 'expo-location';

import { TextInputMask } from 'react-native-masked-text'

export default function Register({ navigation }) {
	const [email, setEmail] = useState(null);
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	const [phone, setPhone] = useState(null);
	const [phoneField, setPhoneField] = useState(null);
	const [passwordMatches, setPasswordMatches] = useState(false);
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);

	const { register } = useContext(AuthContext);

	useEffect(() => {
		getLocation();
	}, [])

	async function getLocation() {
		let { status } = await Location.requestPermissionsAsync();
			
		if (status !== 'granted') {
			Alert.alert('Para acessarmos sua localização você precisa permitir, pode faze-lo mais tarde na tela de configurações');
		}

		let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();

		setLatitude(latitude);
		setLongitude(longitude);
	}

	async function handleRegister() {
		try {
			if (!passwordMatches) {
				Alert.alert("Senha", "As senhas não combinam.");
				return;
			}

			const unmasked = await phoneField.getRawValue();
			setPhone(unmasked);

			// Mocking Coordinates
			// setLatitude(-23.504583);
			// setLongitude(-46.556192);

			const coordinates = [ latitude, longitude ];
			const data = {email, name, phone, password, coordinates};

			console.log(data);

			const response = await register(data);

			if (response.status === 200) {
				Alert.alert("Eba!!", "Sua conta foi criada com sucesso!");
				navigation.goBack();
				return;
			}

			Alert.alert("Erro na criação de conta", response.data.error);
		} catch (err) {
			Alert.alert("Erro na criação de conta", err.data.error);
		}
	}

	function handlePasswordMatch(currentPassword) {
		setPasswordMatches(currentPassword === password);
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
				Crie sua conta
			</Text>
			<View style={styles.panel}>
				<TextInput
					style={styles.input}
					placeholder="Nome"
					onChangeText={text => setName(text)}
				/>
				<TextInput
					style={styles.input}
					placeholder="E-mail"
					autoCapitalize="none"
					onChangeText={text => setEmail(text)}
				/>
				<TextInputMask
					type={"cel-phone"}
					options={{
						maskType: "BRL",
						withDDD: true,
						dddMask: "(99) "
					}}
					placeholder="Telefone"
					style={styles.input}
					value={phone}
					ref={(ref) => setPhoneField(ref)}
					onChangeText={text => setPhone(text)}
				/>
				<TextInput
					secureTextEntry={true}
					style={styles.input}
					placeholder="Senha"
					onChangeText={text => setPassword(text)}
				/>
				<TextInput
					secureTextEntry={true}
					style={styles.input}
					placeholder="Confirme a senha"
					onChangeText={text => handlePasswordMatch(text)}
				/>
				<TouchableHighlight
					style={styles.buttonPrimary}
					onPress={() => handleRegister()}
				>
					<Text style={styles.buttonPrimaryText}>Cadastrar</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
};


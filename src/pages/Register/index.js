import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { AuthContext } from '../../context';
import * as Location from 'expo-location';
import styles from '../../styles/Authentication/styles';

function Register() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
	const { signUp } = useContext(AuthContext);

	useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Acesso a localização negado!');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
	}, []);
	
	return (
		<View style={styles.backgroundCover}>
			<Text style={styles.logo}>BUSCA<Text style={{fontWeight: 'bold'}}>PRA</Text>MIM</Text>
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
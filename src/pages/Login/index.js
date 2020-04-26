import React, { useContext } from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import { AuthContext } from '../../context';
import styles from '../../styles/Authentication/styles';

function Login({ navigation }) {
	const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.backgroundCover}>
      <Text style={styles.logo}>BUSCA<Text style={{fontFamily: 'MontSerratBold'}}>PRA</Text>MIM</Text>
			<View style={styles.panel}>
				<TextInput style={styles.input} placeholder="E-mail"></TextInput>
				<TextInput secureTextEntry={true} style={styles.input} placeholder="Senha"></TextInput>
				<TouchableHighlight style={styles.buttonPrimary} onPress={() => signIn()}>
					<Text style={styles.buttonPrimaryText}>
						Entrar
					</Text>
				</TouchableHighlight>
				<View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
					<Text
						style={styles.buttonText}
						onPress={() => navigation.push('Register')}>Crie sua conta</Text>
					<Text
						style={styles.buttonText} 
						onPress={() => navigation.push('ForgotPassword')}>Esqueci minha senha</Text>
				</View>
			</View>
    </View>
  );
}

export default Login;
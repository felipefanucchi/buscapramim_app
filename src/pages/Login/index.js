import React, { useContext } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { AuthContext } from '../../context';
import styles from '../../styles/Authentication/styles';

function Login({ navigation }) {
	const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.backgroundCover}>
      <Text style={styles.logo}>BUSCA<Text style={{fontWeight: 'bold'}}>PRA</Text>MIM</Text>
			<View style={styles.panel}>
				<TextInput style={styles.input} placeholder="E-mail"></TextInput>
				<TextInput secureTextEntry={true} style={styles.input} placeholder="Senha"></TextInput>
				<Button
					style={styles.buttonPrimary}
					title="Entrar" 
					onPress={() => signIn()}
					color="#E02041"
				/>
				<View style={{ flexDirection:'row', flex: 1, justifyContent: 'space-between' }}>
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
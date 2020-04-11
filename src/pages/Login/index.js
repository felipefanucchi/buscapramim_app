import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from '../../context';

function Login({ navigation }) {
	const { signIn } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
			<Button 
				title="Login!" 
				onPress={() => signIn()} 
			/>
			<Button 
				title="Don't you have an account yet? Come here... Please" 
				onPress={() => navigation.push('Register')} 
			/>
    </View>
  );
}

export default Login;
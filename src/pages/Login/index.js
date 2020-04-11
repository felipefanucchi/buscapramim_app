import React from 'react';
import { Text, View, Button } from 'react-native';

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Don't you have an account yet? Come here... Please" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

export default Login;
import React from 'react';
import { Text, Button } from 'react-native';

function Home({ navigation }) {
	return(
		<>
			<Text>Olá, você está na home.</Text>
			<Button 
				title="Detalhe do caso" 
				onPress={() => navigation.push('Detail',{ 
					name: 'Detalhe do caso.' 
				})} />
		</>
	);
}

export default Home;
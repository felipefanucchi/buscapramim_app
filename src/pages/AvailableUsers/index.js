import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';

function AvailableUsers({ route }) {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Aqui você encontra todos usuários disponíveis e prontos para te ajudar!</Text>
		</View>
	);
}

export default AvailableUsers;
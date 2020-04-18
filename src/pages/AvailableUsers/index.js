import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

function AvailableUsers({ route }) {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Abaixo você encontra pessoas disponíveis e prontas para te ajudar!</Text>
			<View style={styles.card}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<Text style={styles.cardLabel}><Text style={styles.cardValue}>Felipe Fanucchi</Text></Text>
					<Text style={styles.cardLabel}><Text style={styles.cardValue}>100m</Text></Text>
				</View>
				<Text style={styles.cardLabelAddress}><Text style={styles.cardValue}>Em frente a academia Sanchez.</Text></Text>
			</View>
		</View>
	);
}

export default AvailableUsers;
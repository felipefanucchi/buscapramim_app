import React from 'react';
import { Text, View } from 'react-native';
import * as content from '../../styles/CustomContent/styles';
import styles from './styles';
import { Feather } from '@expo/vector-icons'

function AvailableUsers({ route }) {
	return (
		<View style={content.styles.background}>
		<View style={content.styles.header}>
			<Text style={content.styles.headerTitle}>Usuários Disponíveis</Text> 
			<Text style={content.styles.headerSubtitle}>Abaixo você encontra pessoas disponíveis e prontas para te ajudar!</Text> 
		</View>
		<View style={content.styles.content}>
			<View style={styles.card}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
					<View style={styles.cardInfo}>
						<Text style={styles.cardLabel}>Felipe Fanucchi</Text>
						<Text style={styles.cardLabelAddress}>Em frente a academia Sanchez.</Text>
						<Text style={styles.cardLabelDistance}>200m</Text>
					</View>
					<Feather name="arrow-right" color="#EC2041" size={20}></Feather>
				</View>
			</View>
		</View>
	</View>
	);
}

export default AvailableUsers;
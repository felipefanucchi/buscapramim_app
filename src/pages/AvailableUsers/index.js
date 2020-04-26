import React from 'react';
import { Text, View } from 'react-native';
import * as content from '../../styles/ListContent/styles';
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
			<View style={content.styles.card}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
					<View style={content.styles.cardAvatar}>
						<Feather name="user" color="#EC2041" size={30}></Feather>
					</View>
					<View style={content.styles.cardInfo}>
						<Text style={content.styles.cardLabel}>Felipe Fanucchi</Text>
						<Text style={content.styles.cardLabelAddress}>Em frente a academia Sanchez.</Text>
						<Text style={content.styles.cardLabelDistance}>200m</Text>
					</View>
					<View style={content.styles.cardArrow}>
						<Feather name="arrow-right" color="#EC2041" size={20}></Feather>
					</View>
				</View>
			</View>
		</View>
	</View>
	);
}

export default AvailableUsers;
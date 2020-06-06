import React, { useEffect, useContext, useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import * as content from '../../styles/ListContent/styles';
import styles from './styles';
import { Feather } from '@expo/vector-icons'
import { api } from '../../services/api';
import { AuthContext } from '../../context/Auth';

function AvailableUsers({ route }) {
	const [users, setUsers] = useState([]);
	const { token } = useContext(AuthContext);

	useEffect(() => {
		getAllAvailableUsers();
	}, []);

	async function getAllAvailableUsers() {
		try {
			const config = {
				headers: {
					Authorization: token
				}
			};
			const response = await api.get('available_user', config);
			setUsers(response.data.users);
		} catch(err) {
			Alert.alert("Erro ao listar os usuários, tente novamente mais tarde", err.data.error);
		}
	}

	return (
	<View style={content.styles.background}>
		<View style={content.styles.header}>
			<Text style={content.styles.headerTitle}>Usuários Disponíveis</Text> 
			<Text style={content.styles.headerSubtitle}>Abaixo você encontra pessoas disponíveis e prontas para te ajudar!</Text> 
		</View>
		<ScrollView style={content.styles.content}>
			{users.map(user => (
				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="user" color="#EC2041" size={30}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>{user.name}</Text>
							<Text style={content.styles.cardLabelAddress}>{user.address_complement}</Text>
							<Text style={content.styles.cardLabelDistance}>200m</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="arrow-right" color="#EC2041" size={20}></Feather>
						</View>
					</View>
				</View>
			))}
		</ScrollView>
	</View>
	);
}

export default AvailableUsers;
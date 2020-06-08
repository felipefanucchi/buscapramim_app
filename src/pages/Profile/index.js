import React, { useContext, useState, useEffect } from 'react';
import { Text, View, Switch, ScrollView, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'

import * as content from '../../styles/ListContent/styles';
import styles from './styles';
import { AuthContext } from '../../context/Auth';
import { api } from '../../services/api';

function Profile() {
	const [isEnabled, setIsEnabled] = useState(false);
	const [userAvailability, setUserAvailability] = useState(null);
	const { logout } = useContext(AuthContext);
	const { user: currentUser } = useContext(AuthContext);
	const { token } = useContext(AuthContext);

	useEffect(() => {
		setUserAvailability(currentUser.user.available);
	}, []);

	async function handleUserAvailability(available) {
		try {
			const data = {
				available
			};

			const config = {
				headers: {
					Authorization: token
				}
			};

			const response = await api.put('profile', data, config);

			if (response.status !== 200) {
				return Alert.alert('Erro ao atualizar, tente novamente mais tarde');
			}

			setUserAvailability(available);

			if (available) {
				Alert.alert("Pronto! Agora todos usuários podem entrar em contato com você!");
				return;
			}

			Alert.alert("Espero que em breve possa estar disponível para nossos usuários");
		} catch(err) {
			console.log(err);
			Alert.alert("Erro ao atualizar sua disponibilidade, tente novamente mais tarde");
		}
	}

	return(
		<View style={content.styles.background}>
			<View style={content.styles.header}>
				<Text style={content.styles.headerTitle}>Perfil</Text> 
				<Text style={content.styles.headerSubtitle}>Informações da sua conta</Text> 
			</View>

			<ScrollView style={content.styles.content}>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="plus" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Adicionar uma necessidade</Text>
							<Text style={content.styles.cardLabelAddress}>Nos conte o que você precisa!</Text>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="users" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Visível para outros usuários</Text>
							<Text style={content.styles.cardLabelAddress}>Se estiver disponível para ajudar outras pessoas</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Switch
								trackColor={{ false: "#F0F0F0", true: "#f695a5" }}
								thumbColor={isEnabled ? "#EC2041" : "#f4f3f4"}
								ios_backgroundColor="#3e3e3e"
								onValueChange={value => handleUserAvailability(value)}
								value={userAvailability}
							/>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="list" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Necessidades</Text>
							<Text style={content.styles.cardLabelAddress}>Acesse todas suas necessidades</Text>
						</View>
					</View>
				</View>

				<Text style={content.styles.areaTitle}>Login e segurança</Text>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="user" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Nome</Text>
							<Text style={content.styles.cardLabelAddress}>{currentUser.user.name}</Text>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="mail" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>E-mail</Text>
							<Text style={content.styles.cardLabelAddress}>{currentUser.user.email}</Text>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="phone" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Telefone</Text>
							<Text style={content.styles.cardLabelAddress}>{currentUser.user.phone}</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="edit" color="#EC2041" size={18}></Feather>
						</View>
					</View>
				</View>

				{/* <View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="lock" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Alterar Senha</Text>
							<Text style={content.styles.cardLabelAddress}>*****</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="edit" color="#EC2041" size={18}></Feather>
						</View>
					</View>
				</View> */}
				
				<Text style={content.styles.areaTitle}>Endereço</Text>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="map-pin" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Localização</Text>
							<Text style={content.styles.cardLabelAddress}>Permitir acesso a sua localização?</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Switch
								trackColor={{ false: "#F0F0F0", true: "#f695a5" }}
								thumbColor={isEnabled ? "#EC2041" : "#f4f3f4"}
								ios_backgroundColor="#3e3e3e"
								onValueChange={value => setIsEnabled(value)}
								value={isEnabled}
							/>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="map" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Complemento</Text>
							<Text style={content.styles.cardLabelAddress}>{currentUser.user.address_complement}</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="edit" color="#EC2041" size={18}></Feather>
						</View>
					</View>
				</View>

				<Text style={content.styles.areaTitle}>Ações</Text>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="power" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabelLogout} onPress={() => logout()}>Sair</Text>
						</View>
					</View>
				</View>
				
			</ScrollView>
		</View>
	);
}

export default Profile;
import React, { useContext, useState } from 'react';
import { Text, View, Switch, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'

import * as content from '../../styles/ListContent/styles';
import styles from './styles';

function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);

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
								onValueChange={value => setIsEnabled(value)}
								value={isEnabled}
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
							<Text style={content.styles.cardLabel}>Usuário</Text>
							<Text style={content.styles.cardLabelAddress}>Felipe Fanucchi</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="edit" color="#EC2041" size={18}></Feather>
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
							<Text style={content.styles.cardLabelAddress}>flfanucchi@gmail.com</Text>
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
							<Text style={content.styles.cardLabelAddress}>(11) 98308-6001</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="edit" color="#EC2041" size={18}></Feather>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
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
				</View>
				
				<Text style={content.styles.areaTitle}>Permissões</Text>

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

				<Text style={content.styles.areaTitle}>Ações</Text>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="power" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabelLogout}>Sair</Text>
						</View>
					</View>
				</View>
				
			</ScrollView>
		</View>
	);
}

export default Profile;
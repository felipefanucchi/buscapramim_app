import React, { useContext, useState } from 'react';
import { Text, View, Switch } from 'react-native';
import { AuthContext } from '../../context';
import { Feather } from '@expo/vector-icons'

import * as content from '../../styles/ListContent/styles';
import styles from './styles';

function Profile() {
	const {signOut} = useContext(AuthContext);
  const [isEnabled, setIsEnabled] = useState(false);

	return(
		<View style={content.styles.background}>
			<View style={content.styles.header}>
				<Text style={content.styles.headerTitle}>Configurações</Text> 
				<Text style={content.styles.headerSubtitle}>Informações da sua conta</Text> 
			</View>
			<View style={content.styles.content}>

				<Text style={content.styles.areaTitle}>Login e segurança</Text>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="user" color="#EC2041" size={30}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Usuário</Text>
							<Text style={content.styles.cardLabelAddress}>Felipe Fanucchi</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="edit" color="#EC2041" size={25}></Feather>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="mail" color="#EC2041" size={30}></Feather>
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
							<Feather name="phone" color="#EC2041" size={30}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Telefone</Text>
							<Text style={content.styles.cardLabelAddress}>(11) 98308-6001</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="edit" color="#EC2041" size={25}></Feather>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="lock" color="#EC2041" size={30}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Alterar Senha</Text>
							<Text style={content.styles.cardLabelAddress}>*****</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="edit" color="#EC2041" size={25}></Feather>
						</View>
					</View>
				</View>
				
				<Text style={content.styles.areaTitle}>Permissões</Text>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="map-pin" color="#EC2041" size={30}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Localização</Text>
							<Text style={content.styles.cardLabelAddress}>Permitir acesso a sua localização?</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Switch
								trackColor={{ false: "#F0F0F0", true: "#EC2041" }}
								thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
								ios_backgroundColor="#3e3e3e"
								onValueChange={value => setIsEnabled(value)}
								value={isEnabled}
							/>
						</View>
					</View>
				</View>
				
				<Text style={content.styles.areaTitle}>Dados</Text>

				<View style={content.styles.card}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
						<View style={content.styles.cardAvatar}>
							<Feather name="list" color="#EC2041" size={30}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Necessidades</Text>
							<Text style={content.styles.cardLabelAddress}>Acesse todas suas necessidades</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Feather name="edit" color="#EC2041" size={25}></Feather>
						</View>
					</View>
				</View>
				
			</View>
		</View>
	);
}

export default Profile;
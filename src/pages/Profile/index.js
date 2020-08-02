import React, { useContext, useState, useEffect } from "react";
import { Text, View, Switch, ScrollView, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

import * as content from "../../styles/ListContent/styles";
import styles from "./styles";
import { AuthContext } from "../../context/Auth";
import { api } from "../../services/api";
import { TextInputMask } from "react-native-masked-text";
import { TextInput } from "react-native-gesture-handler";
import * as Location from 'expo-location';

function Profile({ navigation }) {
	const [canAccessLocation, setCanAccessLocation] = useState(true);
	const [userAvailability, setUserAvailability] = useState(null);

	const [userPhone, setUserPhone] = useState("");
	const [changePhone, setChangePhone] = useState(false);

	const [addressComplement, setAddressComplement] = useState("");
	const [changeAddressComplement, setChangeAddressComplement] = useState(false);

	const { logout } = useContext(AuthContext);
	const { user: currentUser } = useContext(AuthContext);
	const { token } = useContext(AuthContext);

	useEffect(() => {
		setUserAvailability(currentUser.user.available);
		setUserPhone(currentUser.user.phone);
		setAddressComplement(currentUser.user.address_complement);
	}, []);

	async function getLocation(canAccess) {
		if (!canAccess) {
			Alert.alert('Para acessarmos sua localização você precisa permitir, pode faze-lo aqui mesmo, quando se sentir confortável');
			setCanAccessLocation(canAccess);
			return;
		}
	
		let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();

		const data = {
			coordinates: [latitude, longitude],
		};

		const config = {
			headers: {
				Authorization: token,
			},
		};

		console.group(data, config)

		try {
			await api.put('profile', data, config);
			setCanAccessLocation(canAccess);

			Alert.alert('Localização atualizada com sucesso');
		} catch (err) { 
			console.log(err)
			Alert.alert('houve um erro ao atualizar sua posição, tente novamente mais tarde');
		}
	}

	async function handlePhoneChange() {
		try {
			const data = {
				phone: userPhone,
			};

			const config = {
				headers: {
					Authorization: token,
				},
			};

			const response = await api.put("profile", data, config);

			if (response.status !== 200) {
				return Alert.alert("Erro ao atualizar, tente novamente mais tarde");
			}

			setUserPhone(userPhone);

			await Alert.alert("Pronto! Seu telefone foi atualizado");

			setChangePhone(false);
		} catch (error) {
			Alert.alert("Erro ao atualizar seu telefone, tente novamente mais tarde");
		}
	}

	async function handleComplementChange() {
		try {
			const data = {
				address_complement: addressComplement
			};

			const config = {
				headers: {
					Authorization: token,
				},
			};

			const response = await api.put("profile", data, config);

			if (response.status !== 200) {
				return Alert.alert("Erro ao atualizar, tente novamente mais tarde");
			}

			setAddressComplement(addressComplement);

			await Alert.alert("Pronto! O complemente do seu endereço foi atualizado");

			setChangeAddressComplement(false);
		} catch (error) {
			Alert.alert(
				"Erro ao atualizar o complemente do seu endereço, tente novamente mais tarde"
			);
		}
	}

	async function handleUserAvailability(available) {
		try {
			const data = {
				available,
			};

			const config = {
				headers: {
					Authorization: token,
				},
			};

			const response = await api.put("profile", data, config);

			if (response.status !== 200) {
				return Alert.alert("Erro ao atualizar, tente novamente mais tarde");
			}

			setUserAvailability(available);

			if (available) {
				Alert.alert(
					"Pronto! Agora todos usuários podem entrar em contato com você!"
				);
				return;
			}

			Alert.alert(
				"Espero que em breve possa estar disponível para nossos usuários"
			);
		} catch (err) {
			console.log(err);
			Alert.alert(
				"Erro ao atualizar sua disponibilidade, tente novamente mais tarde"
			);
		}
	}

	return (
		<View style={content.styles.background}>
			<View style={content.styles.header}>
				<Text style={content.styles.headerTitle}>Perfil</Text>
				<Text style={content.styles.headerSubtitle}>
					Informações da sua conta
				</Text>
			</View>

			<ScrollView style={content.styles.content}>
				<View style={content.styles.card}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<View style={content.styles.cardAvatar}>
							<Feather name="plus" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text onPress={() => navigation.navigate('Adicionar Necessidade')} style={content.styles.cardLabel}>
								Adicionar uma necessidade
							</Text>
							<Text style={content.styles.cardLabelAddress}>
								Nos conte o que você precisa!
							</Text>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<View style={content.styles.cardAvatar}>
							<Feather name="users" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>
								Visível para outros usuários
							</Text>
							<Text style={content.styles.cardLabelAddress}>
								Se estiver disponível para ajudar outras pessoas
							</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Switch
								trackColor={{ false: "#F0F0F0", true: "#f695a5" }}
								thumbColor={userAvailability ? "#EC2041" : "#f4f3f4"}
								ios_backgroundColor="#3e3e3e"
								onValueChange={(value) => handleUserAvailability(value)}
								value={userAvailability}
							/>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<View style={content.styles.cardAvatar}>
							<Feather name="list" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text onPress={() => navigation.navigate('Listar Necessidades')} style={content.styles.cardLabel}>Necessidades</Text>
							<Text style={content.styles.cardLabelAddress}>
								Acesse todas suas necessidades
							</Text>
						</View>
					</View>
				</View>

				<Text style={content.styles.areaTitle}>Login e segurança</Text>

				<View style={content.styles.card}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<View style={content.styles.cardAvatar}>
							<Feather name="user" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Nome</Text>
							<Text style={content.styles.cardLabelAddress}>
								{currentUser.user.name}
							</Text>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<View style={content.styles.cardAvatar}>
							<Feather name="mail" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>E-mail</Text>
							<Text style={content.styles.cardLabelAddress}>
								{currentUser.user.email}
							</Text>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<View style={content.styles.cardAvatar}>
							<Feather name="phone" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Telefone</Text>
							{changePhone ? (
								<TextInputMask
									type={"cel-phone"}
									options={{
										maskType: "BRL",
										withDDD: true,
										dddMask: "(99) ",
									}}
									placeholder="Digite aqui seu telefone"
									style={styles.input}
									value={userPhone}
									onChangeText={(phone) => setUserPhone(phone)}
								/>
							) : (
								<Text style={content.styles.cardLabelAddress}>{userPhone}</Text>
							)}
						</View>
						<View style={content.styles.cardArrow}>
							{changePhone ? (
								<Text onPress={() => handlePhoneChange()}>
									<Feather
										click
										name="check"
										color="#EC2041"
										size={18}
									></Feather>
								</Text>
							) : (
								<Text onPress={() => setChangePhone(true)}>
									<Feather
										click
										name="edit"
										color="#EC2041"
										size={18}
									></Feather>
								</Text>
							)}
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
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<View style={content.styles.cardAvatar}>
							<Feather name="map-pin" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Localização</Text>
							<Text style={content.styles.cardLabelAddress}>
								Permitir acesso a sua localização?
							</Text>
						</View>
						<View style={content.styles.cardArrow}>
							<Switch
								trackColor={{ false: "#F0F0F0", true: "#f695a5" }}
								thumbColor={canAccessLocation ? "#EC2041" : "#f4f3f4"}
								ios_backgroundColor="#3e3e3e"
								onValueChange={(value) => getLocation(value)}
								value={canAccessLocation}
							/>
						</View>
					</View>
				</View>

				<View style={content.styles.card}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<View style={content.styles.cardAvatar}>
							<Feather name="map" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text style={content.styles.cardLabel}>Complemento</Text>
							{changeAddressComplement ? (
								<TextInput
									placeholder="Digite aqui seu complemente de endereço"
									style={styles.input}
									value={addressComplement}
									onChangeText={(complement) =>
										setAddressComplement(complement)
									}
								/>
							) : (
								<Text style={content.styles.cardLabelAddress}>
									{addressComplement}
								</Text>
							)}
						</View>
						<View style={content.styles.cardArrow}>
							{changeAddressComplement ? (
								<Text onPress={() => handleComplementChange()}>
									<Feather
										click
										name="check"
										color="#EC2041"
										size={18}
									></Feather>
								</Text>
							) : (
								<Text onPress={() => setChangeAddressComplement(true)}>
									<Feather
										click
										name="edit"
										color="#EC2041"
										size={18}
									></Feather>
								</Text>
							)}
						</View>
					</View>
				</View>

				<Text style={content.styles.areaTitle}>Ações</Text>

				<View style={content.styles.card}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							flex: 1,
						}}
					>
						<View style={content.styles.cardAvatar}>
							<Feather name="power" color="#EC2041" size={25}></Feather>
						</View>
						<View style={content.styles.cardInfo}>
							<Text
								style={content.styles.cardLabelLogout}
								onPress={() => logout()}
							>
								Sair
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

export default Profile;

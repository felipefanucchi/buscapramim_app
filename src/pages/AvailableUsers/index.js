import React, { useEffect, useContext, useState } from 'react';
import { Text, View, ActivityIndicator, Alert, TouchableOpacity, Linking, Platform, FlatList } from 'react-native';
import * as content from '../../styles/ListContent/styles';
import styles from './styles';
import { Feather } from '@expo/vector-icons'
import { api } from '../../services/api';
import { AuthContext } from '../../context/Auth';
import * as Location from 'expo-location';

function AvailableUsers({ route, navigation }) {
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1);
	const [currentId, setCurrentId] = useState(null);
	const [loading, setLoading] = useState(false);
	const [totalCount, setTotalCount] = useState(0);
	const [firstLoad, setFirstLoad] = useState(false);
	const { token } = useContext(AuthContext);
	const [coordinates, setCoordinates] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== 'granted') {
				throw new Error('You must grant access to location');
			}
			let {coords} = await Location.getCurrentPositionAsync();
			setCoordinates(coords);
			getAvailableUsers();
		})()
	}, []);

	async function getAvailableUsers() {
		try {
			const config = {
				headers: {
					Authorization: token
				},
				params: {
					page,
					lat: -46.538905,
					long: -23.468852
				}
			};

			if (totalCount != users.length) {
				setLoading(true);
			}

			const response = await api.get(`available_user`, config);
			setTotalCount(response.headers['x-total-count']);
			setUsers([...users, ...response.data.users]);
			setPage(page + 1);
			setLoading(false);
			setFirstLoad(true);
		} catch(err) {
			Alert.alert("Erro ao listar os usuários, tente novamente mais tarde", err);
		}
	}

	async function call(phone) {
		let phoneNumber = phone;
		if (Platform.OS !== 'android') {
			phoneNumber = `telprompt:${phone}`;
		} else  {
			phoneNumber = `tel:${phone}`;
		}

		try {
			const supported = await Linking.canOpenURL(phoneNumber);

			if (!supported) {
				Alert.alert("Não foi possível completar a chamada com o número.");
				return;
			}
			return Linking.openURL(phoneNumber);
		} catch(err) {
			console.log(err);
		}
	}

	async function sendWhatsapp(phone) {
		Linking.openURL(`whatsapp://send?phone=55${phone}`);
	}

	function renderItem({item}) {
		return (
			<View style={content.styles.card}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
					<View style={content.styles.cardAvatar}>
						<Feather name="user" color="#EC2041" size={30}></Feather>
					</View>
					<View style={content.styles.cardInfo}>
						<Text style={content.styles.cardLabel}>{item.name}</Text>
						<Text style={content.styles.cardLabelAddress}>{item.address_complement}</Text>
						<Text style={content.styles.cardLabelDistance}>{item.distance_away}km</Text>
					</View>
					<View style={content.styles.cardArrow}>
						{currentId === item.id && <Feather onPress={() => setCurrentId(item.id)} name="chevron-down" color="#EC2041" size={20}></Feather>}
						{currentId !== item.id && <Feather onPress={() => setCurrentId(item.id)} name="chevron-right" color="#EC2041" size={20}></Feather>}
					</View>
				</View>
				{currentId === item.id &&
					(<View style={styles.actions}>
						<TouchableOpacity style={styles.action} onPress={() => sendWhatsapp(item.phone)}>
							<Feather name="message-circle" size={22} color="#FFF"/>
							<Text style={styles.actionText}>Whatsapp</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.action} onPress={() => call(item.phone)}>
							<Feather name="phone-call" size={22} color="#FFF"/>
							<Text style={styles.actionText}>Ligar</Text>
						</TouchableOpacity>
					</View>) }
			</View>)
	}

	function renderFooter() {
		if (!loading) return null;
		return (
			<ActivityIndicator />
		);
	}

	return (
	<View style={content.styles.background}>
		<View style={content.styles.header}>
			<Text style={content.styles.headerTitle}>Usuários Disponíveis</Text> 
			<Text style={content.styles.headerSubtitle}>Abaixo você encontra pessoas disponíveis e prontas para te ajudar!</Text> 
		</View>
		<FlatList
			style={content.styles.content}
			data={users}
			renderItem={user => renderItem(user)}
			keyExtractor={user => user.id.toString()}
			onEndReached={getAvailableUsers}
			onEndReachedThreshold={0.5}
			ListFooterComponent={renderFooter}
		/>
	</View>
	);
}

export default AvailableUsers;
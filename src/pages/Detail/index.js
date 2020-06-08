import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import * as content from '../../styles/ListContent/styles';
import { Feather } from '@expo/vector-icons'

function Detail({ route }) {

	function sendWhatsapp() {
    Linking.openURL(`whatsapp://send`)
	}
	
	function openWaze() {
		Linking.openURL(`waze://waze.com`);
	}
	return (
		<View style={styles.container}>
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
						<Feather onPress={() => navigateTo(user.id, user.name)} name="arrow-right" color="#EC2041" size={20}></Feather>
					</View>
				</View>
			</View>
			<View style={styles.actions}>
				<TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
					<Feather name="message-circle" size={22} color="#FFF"/>
					<Text style={styles.actionText}>Whatsapp</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.action} onPress={openWaze}>
					<Feather name="map" size={22} color="#FFF"/>
					<Text style={styles.actionText}>Navegar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Detail;
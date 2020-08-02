import React, { useEffect, useContext, useState } from 'react';
import { Text, View, ActivityIndicator, Alert, TouchableOpacity, Linking, Platform, FlatList } from 'react-native';
import * as content from '../../styles/ListContent/styles';
// import styles from './styles';
import { Feather } from '@expo/vector-icons'
import { api } from '../../services/api';
import { AuthContext } from '../../context/Auth';

function ListNeeds() {
	const [products, setProducts] = useState([]);
	const { token } = useContext(AuthContext);

	useEffect(() => {
		(async () => {
			const config = {
				headers: {
					Authorization: token,
				},
			};

			const response = await api.get('product', config);

			setProducts(response.data.products);
		})()
	}, []);

	async function removeNeed(id) {
		try {

			const config = {
				headers: {
					Authorization: token,
				},
			};

			await api.delete(`product/${id}`, config)

			Alert.alert('Necessidade deletada com sucesso');

			const response = await api.get('product', config);

			setProducts(response.data.products);
		} catch (err) {
			Alert.alert('Houve um problema ao deletar sua necessidade, tente novamente mais tarde');
		}
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
						<Text style={content.styles.cardLabelAddress}>Descrição: {item.description}</Text>
						<Text style={content.styles.cardLabelDistance}>Quantidade: {item.quantity}</Text>
					</View>
					<View style={content.styles.cardArrow}>
						<Feather onPress={() => removeNeed(item.id)} name="trash" color="#EC2041" size={20}></Feather>
					</View>
				</View>
			</View>)
	}

	return (
	<View style={content.styles.background}>
		<View style={content.styles.header}>
			<Text style={content.styles.headerSubtitle}>Aqui você encontra todas suas necessidades</Text> 
		</View>
		<FlatList
			style={content.styles.content}
			data={products}
			renderItem={product => renderItem(product)}
			keyExtractor={product => product.id.toString()}
		/>
	</View>
	);
}

export default ListNeeds;
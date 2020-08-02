import React, { useEffect, useContext, useState } from "react";
import { Text, View, ScrollView, TextInput, Alert } from "react-native";
import * as content from "../../styles/ListContent/styles";
import { Feather } from "@expo/vector-icons";
import styles from './styles';
import { AuthContext } from "../../context/Auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../../services/api";

function AddNeed() {
	const { token } = useContext(AuthContext);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState('');

	async function submit() {
		try {
			const config = {
				headers: {
					Authorization: token,
				},
			};

			const data = {
				name, description, quantity
			}

			const response = await api.post('product', data, config);

			if (response.status !== 200) {
				Alert.alert('Houve um erro ao cadastrar seu produto.');
				return;
			}

			Alert.alert('Produto cadastrado com sucesso');

			setName('');
			setDescription('');
			setQuantity('');
		} catch(err) {
			console.log(err)
			Alert.alert('Erro ao cadastrar o produto')
		}
	}

	return (
		<View style={content.styles.background}>
			<View style={content.styles.header}>
				<Text style={content.styles.headerSubtitle}>
					Aqui você adiciona suas necessidades
				</Text>
			</View>
			<ScrollView style={content.styles.content}>
				<View style={content.styles.card}>
					<Text style={content.styles.areaTitle}>Nome do produto:</Text>
					<TextInput 
						value={name}
						onChangeText={name => setName(name)}
						style={styles.input} placeholder="ex: Uma caixa de ovos"></TextInput>
				</View>
				<View style={content.styles.card}>
					<Text style={content.styles.areaTitle}>Descrição:</Text>
					<TextInput 
						multiline={true} 
						numberOfLines={3}
						value={description}
						onChangeText={description => setDescription(description)}
						style={styles.textArea} placeholder="ex: como e onde encontrar, marca, peso etc..."></TextInput>
				</View>
				<View style={content.styles.card}>
					<Text style={content.styles.areaTitle}>Quantidade:</Text>
					<TextInput
						value={quantity}
						onChangeText={quantity => setQuantity(quantity)}
						style={styles.input} placeholder="ex: 2."></TextInput>
				</View>
				<View style={styles.actionWrapper}>
					<TouchableOpacity style={styles.action} onPress={() => submit()}>
						<Text style={styles.actionText}>Enviar</Text>
						<Feather name="arrow-right" size={22} color="#FFF"/>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}

export default AddNeed;

import React, { useEffect, useContext, useState } from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import * as content from "../../styles/ListContent/styles";
import { Feather } from "@expo/vector-icons";
import styles from './styles';
import { AuthContext } from "../../context/Auth";

function AddNeed() {
	const [products, setProducts] = useState([]);
	const { token } = useContext(AuthContext);

	useEffect(() => {
		(async () => {})();
	}, []);

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
					<TextInput style={styles.input} placeholder="ex: Uma caixa de ovos"></TextInput>
				</View>
				<View style={content.styles.card}>
					<Text style={content.styles.areaTitle}>Descrição:</Text>
					<TextInput 
						multiline={true} 
						numberOfLines={10} 
						style={styles.textArea} placeholder="ex: como e onde encontrar."></TextInput>
				</View>
				<View style={content.styles.card}>
					<Text style={content.styles.areaTitle}>Quantidade:</Text>
					<TextInput 
						style={styles.input} placeholder="ex: 2."></TextInput>
				</View>
			</ScrollView>
		</View>
	);
}

export default AddNeed;

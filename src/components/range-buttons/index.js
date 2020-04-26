import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

function RangeButtons() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>1km</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>2.5km</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>5km</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>7.5km</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>10km</Text>
			</TouchableOpacity>
		</View>
	);
}

export default RangeButtons;
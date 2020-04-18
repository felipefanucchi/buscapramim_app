import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';

function RangeButtons() {
	return (
		<View style={styles.container}>
			<TouchableOpacity title="1km"/>
			<TouchableOpacity title="2.5km"/>
			<TouchableOpacity title="5km"/>
			<TouchableOpacity title="7.5km"/>
			<TouchableOpacity title="10km"/>
		</View>
	);
}

export default RangeButtons;
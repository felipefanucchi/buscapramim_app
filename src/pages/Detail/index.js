import React from 'react';
import { Text } from 'react-native';

function Detail({ route }) {
	return (
		<Text> você está no caso: { route.params.name }</Text>
	);
}

export default Detail;
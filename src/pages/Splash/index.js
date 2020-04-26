import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import styles from './styles';

function Splash() {
	let [fontsLoaded] = useFonts({
		'MontSerratBold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
		'MontSerratLight': require('../../../assets/fonts/Montserrat-Light.ttf'),
	});

	if (!fontsLoaded)  {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.background}>
				<Text style={styles.welcomeTitle}>BUSCA<Text style={{fontFamily: 'MontSerratBold'}}>PRA</Text>MIM</Text>
				<Text style={styles.welcomeText}>Aqui você encontra alguém disposto a te ajudar!</Text>
			</View>
		);
	}
}

export default Splash;
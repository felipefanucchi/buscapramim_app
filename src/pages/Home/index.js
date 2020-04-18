import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import styles from './styles';
import mapStyleConfig from './mapStyleConfig';
import * as Location from 'expo-location';

function Home({ navigation }) {
	const deltaLatLong = {latitudeDelta: 0.0143, longitudeDelta: 0.0134};

	const [region, setRegion] = useState({
		latitude: 0,
		longitude: 0,
		...deltaLatLong
	});

	const mapStyle = (new Date().getHours() > 19) ? mapStyleConfig : null;

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();

			if (status !== 'granted') {
				throw new Error('You must grant access to location');
			}

			let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
			
			setRegion({
				latitude, longitude,
				...deltaLatLong
			});
		})();
	}, []);

	function onRegionChange(region) {
		console.log(region)
	}

	function onRegionPress(event) {
		console.log(event)
	}
	
	return(
		<View style={styles.container}>
			<MapView 
				style={styles.mapStyle}
				region={region}
				onRegionChange={onRegionChange}
				onPress={onRegionPress}
				showsUserLocation
				loadingEnabled 
				customMapStyle={mapStyle}>
				<Marker
					coordinate={{
						latitude: -23.4696183,
						longitude: -46.539066,
					}}
					title={"Felipe Fanucchi"}
					description={"Apartamento 83 C - Em frente a academia sanchez"}
				/>
			</MapView>
		</View>
	);
}

export default Home;
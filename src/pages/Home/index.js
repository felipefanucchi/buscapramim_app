import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import mapStyleConfig from './mapStyleConfig';
import * as Location from 'expo-location';
import { getPixelSize } from '../../utils';

const GOOGLE_MAPS_APIKEY = 'AIzaSyANApQdINHhAihyiBI67nVnSB3F2mn_Ugo';

function Home({ navigation }) {
	const deltaLatLong = {latitudeDelta: 0.0143, longitudeDelta: 0.0134};
	const mapStyle = (new Date().getHours() > 19) ? mapStyleConfig : null;
	const [destination, setDestination] = useState(false);
	const [mapView, setMapView] = useState(false);

	const [region, setRegion] = useState({
		latitude: 0,
		longitude: 0,
		...deltaLatLong
	});

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();

			if (status !== 'granted') {
				throw new Error('You must grant access to location');
			}

			let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
			
			setRegion({
				latitude, 
				longitude,
				...deltaLatLong
			});
		})();
	}, []);


	function handleDestinationSelected({ nativeEvent: { coordinate } }) {
		const { latitude, longitude } = coordinate;
		setDestination({ latitude, longitude });
	}
	
	return(
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.mapStyle}
				region={region}
				showsUserLocation
				loadingEnabled 
				customMapStyle={mapStyle}
				ref={el => setMapView(el)}>
				<Marker
					coordinate={{
						latitude: -23.504908,
						longitude: -46.556163,
					}}
					title={"Felipe Fanucchi"}
					description={"Apartamento 83 C - Em frente a academia sanchez"}
					onPress={handleDestinationSelected}
				/>

				{destination && (<MapViewDirections
					origin={region}
					destination={destination}
					strokeWidth={3}
					strokeColor="#EC2041"
					apikey={GOOGLE_MAPS_APIKEY}
					onReady={result => {
						mapView.fitToCoordinates(result.coordinates, {
							edgePadding: {
								right: getPixelSize(80),
								top: getPixelSize(80),
								bottom: getPixelSize(80),
								left: getPixelSize(80),
							},
						});
					}}
				/>)}
			</MapView>
		</View>
	);
}

export default Home;
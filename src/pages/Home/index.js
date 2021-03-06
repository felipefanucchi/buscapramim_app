import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import mapStyleConfig from './mapStyleConfig';
import * as Location from 'expo-location';
import { getPixelSize } from '../../utils';
import person from '../../../assets/person.png'
import Geocoder from 'react-native-geocoding';

import RangeButtons from '../../components/range-buttons';
import { Alert } from 'react-native';
import { AuthContext } from '../../context/Auth';
import {api} from '../../services/api';

const GOOGLE_MAPS_APIKEY = 'AIzaSyANApQdINHhAihyiBI67nVnSB3F2mn_Ugo';

function Home({ navigation }) {
	const deltaLatLong = {latitudeDelta: 0.0143, longitudeDelta: 0.0134};
	const mapStyle = (new Date().getHours() >= 19) ? mapStyleConfig : null;
	const [destination, setDestination] = useState(false);
	const [duration, setDuration] = useState(null);
	const [location, setLocation] = useState(null);
	const [distance, setDistance] = useState(null);
	const [mapView, setMapView] = useState(false);
	const [showLabel, setShowLabel] = useState(false);
	const [markers, setMarkers] = useState([]);
	const { token } = useContext(AuthContext);

	const [region, setRegion] = useState({
		latitude: 0,
		longitude: 0,
		...deltaLatLong
	});

	async function getMarkers(latitude, longitude) {
		try {
			const config = {
				headers: {
					Authorization: token
				},
				params: {
					lat: latitude,
					long: longitude,
					radius: 10000000
				}
			};

			const response = await api.get('user_need', config);
			setMarkers(response.data.users);
		} catch(err) {
			console.log(err);
			Alert.alert('Ops!', 'Houve um problema ao buscar os casos disponíveis! Tente novamemte mais tarde');
		}
	}

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();

			Geocoder.init(GOOGLE_MAPS_APIKEY);

			if (status !== 'granted') {
				throw new Error('You must grant access to location');
			}

			let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();

			await getMarkers(latitude, longitude);

			console.log(markers);
			console.log('lat', latitude)
			console.log('lng', longitude);

			const response = await Geocoder.from({ latitude, longitude });
			const address = response.results[0].formatted_address;
			const location = address.substring(0, address.indexOf(','));
			setLocation(location)

			setRegion({
				latitude, 
				longitude,
				...deltaLatLong
			});
		})();
	}, []);


	function handleDestinationSelected(event, id) {
		const { latitude, longitude } = event.nativeEvent.coordinate;
		setDestination({ latitude, longitude });
		setShowLabel(id);
	}
	
	return(
		<View style={styles.container}>

			{/* <RangeButtons /> */}

			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.mapStyle}
				region={region}
				showsUserLocation
				loadingEnabled 
				customMapStyle={mapStyle}
				ref={el => setMapView(el)}>

				{markers.map((marker, index) => (
					<Marker
						coordinate={marker}
						image={person}
						onPress={(event) => handleDestinationSelected(event, index)}
						anchor={{ x: 0, y: 0 }}
						key={index}>
						{showLabel === index && <View style={styles.locationBox}>
							<Text numberOfLines={1} style={styles.locationText}>{distance}KM</Text>
						</View>}
					</Marker>)
				)}

				{destination && (<Marker
					coordinate={region}>
					<View style={styles.myLocationBox}>
							<Text numberOfLines={1} style={styles.myLocationText}>{location}</Text>
							<View style={styles.myLocationTimeBox}>
								<Text style={styles.myLocationTime}>{duration}</Text>
								<Text style={styles.myLocationTimeSmall}>MIN</Text>
							</View>
						</View>
				</Marker>)}

				{destination && (<MapViewDirections
					origin={region}
					destination={destination}
					strokeWidth={3}
					strokeColor="#EC2041"
					apikey={GOOGLE_MAPS_APIKEY}
					timePrecision="now"
					onReady={result => (async () => {
						await setDuration(Math.floor(result.duration));
						await setDistance(result.distance.toFixed(2));
						mapView.fitToCoordinates(result.coordinates, {
							edgePadding: {
								right: getPixelSize(80),
								top: getPixelSize(80),
								bottom: getPixelSize(80),
								left: getPixelSize(80),
							},
						});
					})()}
				/>)}
			</MapView>
		</View>
	);
}

export default Home;
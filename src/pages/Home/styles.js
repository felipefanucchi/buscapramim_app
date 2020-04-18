import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	},
	mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
	},
	locationBox: {
		backgroundColor: '#FFF',
		borderRadius: 3,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		elevation: 2,
		borderColor: '#DDD',
		borderWidth: 1,
		marginTop: 15,
		marginLeft: 25,
		marginBottom: 40
	},
	locationText: {
		marginHorizontal: 10,
		marginVertical: 8,
		fontSize: 14,
		color: '#EC2041',
		fontWeight: '700',
	},
	myLocationBox: {
		backgroundColor: '#FFF',
		flexDirection: 'row',
		paddingLeft: 10,
		borderRadius: 3,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		elevation: 2,
		borderColor: '#DDD',
		borderWidth: 1,
		alignItems: 'center',
	},
	myLocationText: {
		fontSize: 13,
		color: '#333'
	},
	myLocationTimeBox: {
		flexDirection: 'row',
		backgroundColor: '#EC2041',
		paddingHorizontal: 5,
		paddingVertical: 8,
		marginLeft: 5,
	},
	myLocationTime: {
		fontSize: 12,
		color: '#FFF',
		textAlign: 'center'
	},
	myLocationTimeSmall: {
		fontSize: 9,
		color: '#FFF',
		alignSelf: 'flex-end'
	},
});
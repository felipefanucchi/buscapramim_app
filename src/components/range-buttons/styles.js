import {StyleSheet} from 'react-native'

export default StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 20,
		justifyContent: 'center',
		zIndex: 999,
		borderRadius: 10,
		flexDirection: 'row'
	},
	button: {
		backgroundColor: '#EC2041',
		width: 50,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: '#FFF',
		fontSize: 12,
		textAlign: 'center',
		fontFamily: 'MontSerratLight',
		textTransform: 'uppercase'
	}
});